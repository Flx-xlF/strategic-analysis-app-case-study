import { useState, useRef, useCallback, useEffect } from 'react';

export function useMockStream(defaultText = '') {
  const [streamedText, setStreamedText] = useState(defaultText);
  const [isStreaming, setIsStreaming] = useState(false);
  const [progress, setProgress] = useState(defaultText ? 100 : 0);
  const timerRef = useRef<number | null>(null);
  const targetTextRef = useRef(defaultText);

  // Clear timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  const runStream = useCallback((fullText: string, onComplete?: () => void) => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    targetTextRef.current = fullText;
    setStreamedText('');
    setIsStreaming(true);
    setProgress(0);

    let currentIndex = 0;
    const totalLength = fullText.length;
    // Chunk size: 8-15 characters per tick for authentic LLM streaming feel
    const step = Math.max(6, Math.floor(totalLength / 60));

    timerRef.current = window.setInterval(() => {
      currentIndex += step;
      if (currentIndex >= totalLength) {
        setStreamedText(fullText);
        setProgress(100);
        setIsStreaming(false);
        if (timerRef.current) window.clearInterval(timerRef.current);
        if (onComplete) onComplete();
      } else {
        setStreamedText(fullText.slice(0, currentIndex));
        setProgress(Math.floor((currentIndex / totalLength) * 100));
      }
    }, 22);
  }, []);

  const abortStream = useCallback(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    setIsStreaming(false);
  }, []);

  const skipToEnd = useCallback((fullText?: string) => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    const text = fullText || targetTextRef.current;
    setStreamedText(text);
    setIsStreaming(false);
    setProgress(100);
  }, []);

  return {
    streamedText,
    isStreaming,
    progress,
    runStream,
    abortStream,
    skipToEnd,
    setStreamedText
  };
}
