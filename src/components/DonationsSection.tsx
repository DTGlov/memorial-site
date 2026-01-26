import { motion } from "framer-motion";
import { Building2, Smartphone, Copy, Check } from "lucide-react";
import { useState } from "react";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 hover:bg-charcoal/10 rounded-lg transition-colors"
      title="Copy to clipboard"
    >
      {copied ? (
        <Check className="w-4 h-4 text-gold" />
      ) : (
        <Copy className="w-4 h-4 text-charcoal-light" />
      )}
    </button>
  );
};

const DonationsSection = () => {
  return (
    <section id="donations" className="py-8 bg-cream-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-gold font-sans text-sm uppercase tracking-[0.25em] mb-3">
            Contribute
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
            Support the Family
          </h2>
          <p className="text-charcoal-light font-sans text-lg">
            Your generosity helps the family during this difficult time
          </p>
          <div className="divider-gold mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
          {/* Bank Account Card */}
          {/* <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gold/10 rounded-full">
                <Building2 className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl text-charcoal font-semibold">
                Bank Account
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <p className="font-sans text-sm text-charcoal-light mb-1">Bank Name</p>
                <div className="flex items-center justify-between bg-cream rounded-lg px-4 py-3">
                  <span className="font-sans font-medium text-charcoal">
                    Ghana Commercial Bank
                  </span>
                  <CopyButton text="Ghana Commercial Bank" />
                </div>
              </div>

              <div>
                <p className="font-sans text-sm text-charcoal-light mb-1">Account Name</p>
                <div className="flex items-center justify-between bg-cream rounded-lg px-4 py-3">
                  <span className="font-sans font-medium text-charcoal">
                    Glover Family Memorial Fund
                  </span>
                  <CopyButton text="Glover Family Memorial Fund" />
                </div>
              </div>

              <div>
                <p className="font-sans text-sm text-charcoal-light mb-1">Account Number</p>
                <div className="flex items-center justify-between bg-cream rounded-lg px-4 py-3">
                  <span className="font-mono text-lg font-semibold text-charcoal tracking-wider">
                    1234567890123
                  </span>
                  <CopyButton text="1234567890123" />
                </div>
              </div>
            </div>
          </motion.div> */}

          {/* USSD Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gold/10 rounded-full">
                <Smartphone className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl text-charcoal font-semibold">
                Mobile Money / USSD
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <p className="font-sans text-sm text-charcoal-light mb-1">USSD Code</p>
                <div className="flex items-center justify-between bg-cream rounded-lg px-4 py-3">
                  <span className="font-mono text-xl font-bold text-charcoal tracking-wide">
                    *170*1*XXXXXX#
                  </span>
                  <CopyButton text="*170*1*XXXXXX#" />
                </div>
              </div>

              <div>
                <p className="font-sans text-sm text-charcoal-light mb-1">Mobile Number</p>
                <div className="flex items-center justify-between bg-cream rounded-lg px-4 py-3">
                  <span className="font-mono text-lg font-semibold text-charcoal tracking-wider">
                    0546465820
                  </span>
                  <CopyButton text="0201234567" />
                </div>
              </div>

               <div>
                <p className="font-sans text-sm text-charcoal-light mb-1">Name</p>
                <div className="flex items-center justify-between bg-cream rounded-lg px-4 py-3">
                  <span className="font-mono text-lg font-semibold text-charcoal tracking-wider">
                  David Tawiah Glover
                  </span>
                  {/* <CopyButton text="0201234567" /> */}
                </div>
              </div>

                <div>
                <p className="font-sans text-sm text-charcoal-light mb-1">Reference</p>
                <div className="flex items-center justify-between bg-cream rounded-lg px-4 py-3">
                  <span className="font-mono text-lg font-semibold text-charcoal tracking-wider">
                  ENGL
                  </span>
                  <CopyButton text="0201234567" />
                </div>
              </div>

              <div className="pt-4">
                <p className="font-sans text-sm text-charcoal-light text-center">
                  Dial the USSD code from your mobile phone to make a donation directly via Mobile Money.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-charcoal-light font-sans text-sm mt-12 max-w-xl mx-auto"
        >
          All donations will go directly to support the family. Thank you for your kindness and generosity.
        </motion.p>
      </div>
    </section>
  );
};

export default DonationsSection;
