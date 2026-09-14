export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "AI & Automation" | "WordPress" | "Full Stack Web";
  role: string;
  year: string;
  clientOrContext: string;
  description: string;
  longDescription: string;
  technologies: string[];
  stats: {
    value: string;
    label: string;
  };
  highlights: string[];
  codeSnippet: {
    language: string;
    filename: string;
    code: string;
  };
  visualTheme: {
    primaryColor: string;
    accentGlow: string;
    badgeText: string;
  };
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const PROJECTS: Project[] = [

  {
    id: "sony-wh1000xm6",
    title: "Sony WH-1000XM6 Audio Experience",
    tagline: "Immersive 3D Exploded Headphone Architecture & Scroll Choreography",
    category: "Full Stack Web",
    role: "Creative Technologist & UI Engineer",
    year: "2026",
    clientOrContext: "Flagship Product Experience",
    image: "/images/sony-wh1000xm6.png",
    description:
      "Flagship audio product experience featuring scroll-driven 3D component explosion (192-frame sequence), noise cancelling driver acoustic simulations, and ultra-smooth frame buffering.",
    longDescription:
      "A world-class product experience modeled after Sony's design philosophy. Implements smooth scroll interpolation, frame synchronization, titanium headband architecture breakdowns, and acoustic damping visualizations.",
    technologies: [
      "Next.js",
      "GSAP ScrollTrigger",
      "HTML5 Canvas",
      "Tailwind CSS",
      "Web Audio API",
      "TypeScript",
    ],
    stats: {
      value: "192",
      label: "Synchronized 3D Exploded Frames",
    },
    highlights: [
      "Engineered a 192-frame scroll-synchronized canvas animation rendering flawless hardware disassembly.",
      "Acoustic frequency response visualizer showcasing real-time active noise-cancelling simulation.",
      "Sub-1.2s progressive asset preloader with intelligent browser cache orchestration.",
      "WCAG-compliant interactive specifications drawer and high-fidelity audio mode selector.",
    ],
    codeSnippet: {
      language: "typescript",
      filename: "AudioScroller.ts",
      code: `export class HeadphoneScrollOrchestrator {
  private frameCount = 192;
  private images: HTMLImageElement[] = [];

  constructor(private canvas: HTMLCanvasElement) {
    this.preloadSequences();
  }

  public renderFrame(progress: number) {
    const frameIndex = Math.min(
      this.frameCount - 1,
      Math.floor(progress * this.frameCount)
    );
    const ctx = this.canvas.getContext('2d');
    if (ctx && this.images[frameIndex]) {
      ctx.drawImage(this.images[frameIndex], 0, 0, this.canvas.width, this.canvas.height);
    }
  }
}`,
    },
    visualTheme: {
      primaryColor: "#92400E",
      accentGlow: "rgba(180, 83, 9, 0.22)",
      badgeText: "AUDIO ENGINEERING · GSAP",
    },
    liveUrl: "#",
    githubUrl: "https://github.com/sehariftikhar",
  },
  {
    id: "aigenix-ai",
    title: "Aigenix AI Automation Agency",
    tagline: "We Build AI Agents That Work While You Grow — Enterprise Platform",
    category: "AI & Automation",
    role: "Lead Full Stack AI Developer",
    year: "2026",
    clientOrContext: "Enterprise AI Automation Platform",
    image: "/images/aigenix-ai.png",
    description:
      "Engineered an enterprise AI agency platform featuring intelligent 3D agent workstations, real-time workflow dispatchers, automated client intake, and custom LLM pipelines.",
    longDescription:
      "Aigenix represents cutting-edge AI agency development: interactive 3D robot workspace, 24/7 agent deployment pipelines, automated booking webhooks, and multi-tier pricing calculators.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI GPT-4o",
      "REST Webhooks",
      "GSAP Animations",
    ],
    stats: {
      value: "10x",
      label: "Operational Workflow Velocity",
    },
    highlights: [
      "Interactive 3D stylized workstation illustrating active autonomous agent states.",
      "Automated client intake pipeline connected directly to CRM webhooks and instant calendar sync.",
      "Multi-agent task dispatcher handling complex document indexing, prompt chaining, and notifications.",
      "Flawless dark and light theme switching with persistent client preferences.",
    ],
    codeSnippet: {
      language: "typescript",
      filename: "agent-dispatcher.ts",
      code: `export async function dispatchAutonomousAgent(task: EnterpriseTask) {
  const orchestrator = new AigenixSwarm({
    tier: 'enterprise-hybrid',
    concurrency: 8,
    telemetry: true
  });

  const execution = await orchestrator.execute({
    prompt: task.pipelineInstruction,
    tools: ['crm-sync', 'document-indexer', 'slack-notify']
  });

  return { status: 'DISPATCHED', telemetry: execution.metrics };
}`,
    },
    visualTheme: {
      primaryColor: "#EA580C",
      accentGlow: "rgba(234, 88, 12, 0.22)",
      badgeText: "AI AUTOMATION · OPENAI",
    },
    liveUrl: "#",
    githubUrl: "https://github.com/sehariftikhar",
  },
  {
    id: "cognita-ai",
    title: "Cognita.ai Autonomous Swarm",
    tagline: "Scale Your Business With Autonomous AI Agents & Swarm Intelligence",
    category: "AI & Automation",
    role: "Full Stack AI Systems Engineer",
    year: "2026",
    clientOrContext: "Autonomous Swarm Ecosystem",
    image: "/images/cognita-circle-ai.png",
    description:
      "Scale businesses with autonomous AI agent squads. Features dynamic golden particle orbit topology, 24/7 phone voice agents, automated WhatsApp & web chatbots, and enterprise telemetry monitors.",
    longDescription:
      "Built to coordinate multi-agent teams across customer support, outbound sales, and workflow dispatch. Includes custom Canvas particle swarm simulation, agent role assignment, and live latency metrics.",
    technologies: [
      "React",
      "TypeScript",
      "Canvas Particle Physics",
      "OpenAI Realtime API",
      "Node.js Webhooks",
      "Tailwind CSS",
    ],
    stats: {
      value: "24/7",
      label: "Autonomous Voice & Agent Ops",
    },
    highlights: [
      "Engineered golden particle orbit visualizer reflecting real-time autonomous swarm coordination.",
      "24/7 voice agent pipelines integrated with automated speech-to-speech transcription.",
      "Multi-channel webhook dispatching for automated customer support and CRM lead generation.",
      "Enterprise telemetry dashboard tracking token throughput and response latency.",
    ],
    codeSnippet: {
      language: "javascript",
      filename: "swarm-orchestrator.js",
      code: `class SwarmTelemetryNode {
  constructor(nodeId, role) {
    this.id = nodeId;
    this.role = role;
    this.status = 'ORBIT_ACTIVE';
  }

  async broadcastPulse(payload) {
    const pulse = {
      timestamp: Date.now(),
      sender: this.id,
      role: this.role,
      tokenThroughput: payload.tokens,
      latencyMs: payload.latency
    };
    return await window.cognitaTelemetryHub.ingest(pulse);
  }
}`,
    },
    visualTheme: {
      primaryColor: "#CA8A04",
      accentGlow: "rgba(202, 138, 4, 0.25)",
      badgeText: "AI SWARM · REALTIME",
    },
    liveUrl: "#",
    githubUrl: "https://github.com/sehariftikhar",
  },
  {
    id: "redsun-ai",
    title: "REDSUN AI Neural Platform",
    tagline: "Intelligent Solutions Powered by AI — Planet Horizon Operating Layer",
    category: "AI & Automation",
    role: "Frontend AI Architect",
    year: "2026",
    clientOrContext: "Neural Enterprise Operating Layer",
    image: "/images/redsun-ai.png",
    description:
      "Transform business data with the REDSUN AI operating layer. Features a glowing planet horizon arc hero, live interactive demo terminal, GSAP choreographies, and Space Grotesk typography.",
    longDescription:
      "Engineered with futuristic orbital graphics, synchronized interactive modal dialogues, multi-model LLM benchmarking, and real-time structured JSON extraction.",
    technologies: [
      "React",
      "TypeScript",
      "GSAP Timelines",
      "SVG Planet Arc",
      "Tailwind CSS",
      "Vite",
    ],
    stats: {
      value: "4.8x",
      label: "Faster Decision & Task Cycles",
    },
    highlights: [
      "Developed custom SVG Planet Horizon Arc with radial sunset gradients and particle emissions.",
      "Orchestrated GSAP timelines for synchronized headline, badge, and CTA entrance choreography.",
      "Interactive Live Demo modal with simulated terminal output and workflow step validation.",
      "Clean dark/light theme switching with custom accent glow gradients.",
    ],
    codeSnippet: {
      language: "typescript",
      filename: "PlanetHorizonArc.tsx",
      code: `export const PlanetHorizonArc = () => (
  <div className="relative w-full max-w-4xl mx-auto h-[320px] overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[980px] h-[980px] rounded-full bg-gradient-to-b from-[#FF4D12] via-[#FF1E00]/40 to-transparent blur-2xl opacity-60 pointer-events-none" />
    <svg className="relative w-full h-full" viewBox="0 0 1000 400">
      <path d="M 50 350 Q 500 50 950 350" fill="none" stroke="url(#arcGlow)" strokeWidth="3" />
    </svg>
  </div>
);`,
    },
    visualTheme: {
      primaryColor: "#DC2626",
      accentGlow: "rgba(220, 38, 38, 0.25)",
      badgeText: "NEURAL LAYER · GSAP",
    },
    liveUrl: "#",
    githubUrl: "https://github.com/sehariftikhar",
  },
  {
    id: "nexora-ai",
    title: "Nexora AI Automation Agency",
    tagline: "Automate the Work. Amplify the Business — 3D Cyber Bot Platform",
    category: "AI & Automation",
    role: "Lead AI Systems Engineer",
    year: "2026",
    clientOrContext: "Enterprise Automation Platform",
    image: "/images/nexora-ai.png",
    description:
      "Full stack AI automation platform deploying custom chatbots, voice agents, and autonomous pipelines with interactive 3D robot showcase and real-time live monitoring metrics.",
    longDescription:
      "Engineered with clean neo-morphic cyber design, live 24/7 agent telemetry pill monitors, meeting scheduling automation, and multi-channel CRM integration.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Spline / 3D WebGL",
      "Node.js",
      "Webhooks",
    ],
    stats: {
      value: "99.9%",
      label: "24/7 Monitored Uptime",
    },
    highlights: [
      "Modern 3D Cyber Bot platform with live status pill indicators and voice agent on-call telemetry.",
      "Built automated client onboarding workflow with calendar booking and lead qualification.",
      "Multi-agent task orchestration linking customer support with automated database operations.",
      "High-converting clean aesthetic with smooth micro-interactions and interactive service tiers.",
    ],
    codeSnippet: {
      language: "javascript",
      filename: "nexora-orchestrator.js",
      code: `export class NexoraAgentPipeline {
  constructor(apiKey) {
    this.client = new NexoraCore({ auth: apiKey });
  }

  async triggerAutomatedWorkflow(event) {
    const agent = await this.client.leaseAgent('voice-support');
    return await agent.dispatch({
      target: event.customer,
      intent: event.inquiryType,
      callbackHook: '/api/webhooks/nexora'
    });
  }
}`,
    },
    visualTheme: {
      primaryColor: "#2563EB",
      accentGlow: "rgba(37, 99, 235, 0.25)",
      badgeText: "3D CYBER BOT · ENTERPRISE",
    },
    liveUrl: "#",
    githubUrl: "https://github.com/sehariftikhar",
  },
  {
    id: "robolabs-ai",
    title: "ROBOLABS Next-Gen Robotics",
    tagline: "The Future Is Intelligent — Advanced Humanoid Robotics Built with Spline",
    category: "AI & Automation",
    role: "Creative 3D & AI Web Developer",
    year: "2026",
    clientOrContext: "Next-Gen Robotics Platform",
    image: "/images/robolabs-ai.png",
    description:
      "Ultra-sleek modern robotics interface featuring interactive 3D humanoid robot powered by Spline WebGL, adaptive decision engine, and enterprise-grade hardware integration.",
    longDescription:
      "Built with cutting-edge 3D WebGL scenes from Spline, smooth cursor tracking kinematics, minimal monochrome brutalist-modern aesthetic, and dynamic product feature tours.",
    technologies: [
      "Next.js",
      "Spline 3D WebGL",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "Lucide Icons",
    ],
    stats: {
      value: "60 FPS",
      label: "Real-time 3D Kinematics",
    },
    highlights: [
      "Embedded interactive 3D Spline humanoid robot reacting dynamically to cursor movement.",
      "Engineered minimal high-contrast monochrome design with modern pill badges and micro-cards.",
      "Adaptive design engine showcasing real-time robotics telemetry and enterprise security ratings.",
      "Lightweight WebGL asset loading ensuring sub-second paint times on modern devices.",
    ],
    codeSnippet: {
      language: "typescript",
      filename: "RobolabsSplineScene.tsx",
      code: `import Spline from '@splinetool/react-spline';

export function HumanoidRobotModel() {
  return (
    <div className="relative w-full h-[520px] rounded-3xl overflow-hidden">
      <Spline
        scene="https://prod.spline.design/robolabs-humanoid/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  );
}`,
    },
    visualTheme: {
      primaryColor: "#0F172A",
      accentGlow: "rgba(15, 23, 42, 0.25)",
      badgeText: "HUMANOID ROBOTICS · SPLINE",
    },
    liveUrl: "#",
    githubUrl: "https://github.com/sehariftikhar",
  },
];
