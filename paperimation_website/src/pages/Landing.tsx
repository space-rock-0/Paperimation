import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FloatingParticles from "@/components/FloatingParticles";
import MagicalButton from "@/components/MagicalButton";
import academyBg from "@/assets/academy-bg.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${academyBg})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 magical-glow-overlay" />

      <FloatingParticles />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 text-center px-6"
      >
        <motion.h1
          className="font-heading text-4xl sm:text-6xl md:text-7xl tracking-tight text-gold-gradient mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Paperimation.ai
        </motion.h1>

        <motion.p
          className="font-body text-base sm:text-lg md:text-xl text-muted-foreground tracking-widest mb-10 sm:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Turn research papers into narrated animations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <MagicalButton size="lg" onClick={() => navigate("/dashboard")}>
            Start creating
          </MagicalButton>
        </motion.div>
        <p className="mt-8 text-sm text-muted-foreground">
          By <a href="https://www.linkedin.com/in/siddhartha-sagi/" className="text-primary hover:underline">Sagi Siddhartha</a>
          {" · "}<a href="https://github.com/space-rock-0/Paperimation" className="text-primary hover:underline">GitHub</a>
        </p>
      </motion.div>
    </div>
  );
};

export default Landing;
