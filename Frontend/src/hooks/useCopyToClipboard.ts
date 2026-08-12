import { useCallback, useState } from 'react';
import { toast } from 'sonner';

/** Copy text to the clipboard with a toast confirmation. */
export function useCopyToClipboard() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = useCallback(async (text: string, label?: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      toast.success(label ? `${label} copied` : 'Copied to clipboard');
      setTimeout(() => setCopied(null), 1800);
      return true;
    } catch {
      toast.error('Could not copy. Please copy manually.');
      return false;
    }
  }, []);

  return { copied, copy };
}
