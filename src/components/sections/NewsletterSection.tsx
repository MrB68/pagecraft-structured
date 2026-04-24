import { Minus } from "lucide-react";

export interface NewsletterSectionProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
}

export default function NewsletterSection({
  title = "Stay Updated",
  subtitle = "Join our community for exclusive releases and design insights.",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
}: NewsletterSectionProps) {
  return (
    <section className="bg-black px-4 py-32 text-white sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center space-y-10">
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-white" />
            <Minus size={12} className="opacity-50" />
            <div className="h-px w-8 bg-white" />
          </div>
          <h2 className="text-3xl tracking-[0.2em] uppercase md:text-4xl">{title}</h2>
          <p className="mx-auto max-w-md text-gray-300 opacity-75">{subtitle}</p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-px max-w-lg mx-auto border border-white/30"
        >
          <input
            type="email"
            placeholder={placeholder}
            className="flex-1 px-8 py-5 focus:outline-none uppercase tracking-widest text-sm bg-black text-white placeholder:text-gray-500"
          />
          <button
            type="submit"
            className="px-10 py-5 uppercase tracking-[0.2em] text-sm whitespace-nowrap bg-white text-black hover:bg-gray-200 transition-colors"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
