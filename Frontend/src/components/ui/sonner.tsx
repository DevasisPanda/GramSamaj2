import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

function Toaster({ ...props }: ToasterProps) {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-white group-[.toaster]:text-ink group-[.toaster]:border-saffron-200 group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-ink/60',
          actionButton: 'group-[.toast]:bg-saffron-500 group-[.toast]:text-white',
          cancelButton: 'group-[.toast]:bg-saffron-100 group-[.toast]:text-saffron-800',
        },
      }}
      {...props}
    />
  );
}

export { Toaster };
