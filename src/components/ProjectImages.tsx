export function ResumeIQImage() {
  return (
    <svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="riq-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#040b18" />
          <stop offset="100%" stopColor="#070e1c" />
        </linearGradient>
        <linearGradient id="riq-score-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="riq-bar1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="riq-bar2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
        <radialGradient id="riq-glow" cx="60%" cy="50%" r="40%">
          <stop offset="0%" stopColor="rgba(167,139,250,0.1)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id="riq-blur">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <rect width="640" height="360" fill="url(#riq-bg)" />
      <rect width="640" height="360" fill="url(#riq-glow)" />
      {/* Ambient glow */}
      <ellipse cx="380" cy="180" rx="160" ry="120" fill="rgba(124,58,237,0.06)" filter="url(#riq-blur)" />

      {/* Header */}
      <rect x="0" y="0" width="640" height="44" fill="rgba(0,0,0,0.35)" />
      <rect x="14" y="12" width="20" height="20" rx="5" fill="rgba(167,139,250,0.9)" />
      <text x="15" y="26" fill="white" fontSize="11" fontWeight="900" fontFamily="monospace">R</text>
      <text x="40" y="27" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="700" fontFamily="Inter,sans-serif">Resume IQ</text>
      <text x="113" y="27" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="Inter,sans-serif">· ATS Intelligence Platform</text>
      <rect x="498" y="12" width="128" height="20" rx="10" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" strokeWidth="1" />
      <circle cx="510" cy="22" r="3" fill="#a78bfa" />
      <text x="518" y="25.5" fill="#a78bfa" fontSize="8" fontFamily="Inter,sans-serif">GPT-4 Turbo · Active</text>

      {/* LEFT PANEL — Resume Preview */}
      <rect x="0" y="44" width="188" height="316" fill="rgba(0,0,0,0.25)" />
      <text x="16" y="64" fill="rgba(255,255,255,0.5)" fontSize="9" fontWeight="600" fontFamily="Inter,sans-serif">RESUME PREVIEW</text>
      {/* Document */}
      <rect x="16" y="72" width="156" height="274" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      {/* Resume header */}
      <rect x="24" y="80" width="140" height="28" rx="4" fill="rgba(255,255,255,0.05)" />
      <text x="94" y="91" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="9" fontWeight="700" fontFamily="Inter,sans-serif">John Developer</text>
      <text x="94" y="102" textAnchor="middle" fill="rgba(167,139,250,0.7)" fontSize="7" fontFamily="Inter,sans-serif">john@email.com · LinkedIn · GitHub</text>
      {/* Section: Experience */}
      <text x="28" y="122" fill="rgba(255,255,255,0.55)" fontSize="7.5" fontWeight="700" fontFamily="Inter,sans-serif">EXPERIENCE</text>
      <rect x="24" y="125" width="140" height="1" fill="rgba(255,255,255,0.08)" />
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x="28" y={130+i*22} width={[120,95,108][i]} height="5" rx="2" fill={i===0?"rgba(167,139,250,0.25)":"rgba(255,255,255,0.07)"} />
          <rect x="28" y={139+i*22} width={[80,110,70][i]} height="3.5" rx="1.5" fill="rgba(255,255,255,0.05)" />
        </g>
      ))}
      {/* Red flag highlight */}
      <rect x="24" y="128" width="142" height="22" rx="3" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.2)" strokeWidth="0.8" />
      <text x="142" y="136" fill="#f87171" fontSize="6.5" fontFamily="Inter,sans-serif">⚠ Weak</text>
      {/* Section: Skills */}
      <text x="28" y="205" fill="rgba(255,255,255,0.55)" fontSize="7.5" fontWeight="700" fontFamily="Inter,sans-serif">SKILLS</text>
      <rect x="24" y="208" width="140" height="1" fill="rgba(255,255,255,0.08)" />
      <g>
        {["JavaScript","React","Node.js","TypeScript"].map((sk, i) => (
          <g key={sk}>
            <rect x="28" y={214+i*14} width={[52,36,40,56][i]} height="10" rx="5"
              fill={i<2?"rgba(167,139,250,0.2)":"rgba(255,255,255,0.06)"}
              stroke={i<2?"rgba(167,139,250,0.35)":"rgba(255,255,255,0.1)"} strokeWidth="0.6" />
            <text x={32} y={221+i*14} fill={i<2?"rgba(167,139,250,0.9)":"rgba(255,255,255,0.45)"} fontSize="6" fontFamily="Inter,sans-serif">{sk}</text>
          </g>
        ))}
      </g>
      {/* Section: Education */}
      <text x="28" y="280" fill="rgba(255,255,255,0.55)" fontSize="7.5" fontWeight="700" fontFamily="Inter,sans-serif">EDUCATION</text>
      <rect x="24" y="283" width="140" height="1" fill="rgba(255,255,255,0.08)" />
      {[0,1].map(i => (
        <rect key={i} x="28" y={288+i*14} width={[115,80][i]} height="5" rx="2" fill="rgba(255,255,255,0.06)" />
      ))}
      {/* Score badge on resume */}
      <rect x="130" y="323" width="38" height="16" rx="8" fill="rgba(167,139,250,0.18)" stroke="rgba(167,139,250,0.35)" strokeWidth="1" />
      <text x="149" y="333.5" textAnchor="middle" fill="#a78bfa" fontSize="7" fontWeight="700" fontFamily="Inter,sans-serif">74 / 100</text>

      {/* CENTER PANEL — Score + Skill Gaps */}
      <text x="210" y="64" fill="rgba(255,255,255,0.5)" fontSize="9" fontWeight="600" fontFamily="Inter,sans-serif">ATS ANALYSIS</text>

      {/* Big score ring */}
      <circle cx="310" cy="148" r="55" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="14" />
      <circle cx="310" cy="148" r="55" fill="none" stroke="url(#riq-score-ring)" strokeWidth="14"
        strokeDasharray="243 345" strokeLinecap="round" transform="rotate(-90 310 148)" />
      <circle cx="310" cy="148" r="42" fill="rgba(167,139,250,0.06)" />
      <text x="310" y="140" textAnchor="middle" fill="white" fontSize="28" fontWeight="800" fontFamily="Inter,sans-serif">74</text>
      <text x="310" y="154" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8.5" fontFamily="Inter,sans-serif">ATS Score</text>
      <rect x="268" y="162" width="84" height="15" rx="7" fill="rgba(251,191,36,0.15)" stroke="rgba(251,191,36,0.3)" strokeWidth="0.8" />
      <text x="310" y="172.5" textAnchor="middle" fill="#fbbf24" fontSize="7.5" fontFamily="Inter,sans-serif">Needs Improvement</text>

      {/* Quick stats row */}
      {[{l:"Keywords",v:"68%",c:"#a78bfa"},{l:"Format",v:"82%",c:"#34d399"},{l:"Sections",v:"90%",c:"#06b6d4"}].map((s,i) => (
        <g key={i}>
          <rect x={204+i*75} y="218" width="68" height="44" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <text x={238+i*75} y="234" textAnchor="middle" fill={s.c} fontSize="14" fontWeight="700" fontFamily="Inter,sans-serif">{s.v}</text>
          <text x={238+i*75} y="252" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="Inter,sans-serif">{s.l}</text>
        </g>
      ))}

      {/* Skill gap bars */}
      <rect x="204" y="274" width="222" height="78" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <text x="218" y="291" fill="rgba(255,255,255,0.55)" fontSize="8.5" fontWeight="600" fontFamily="Inter,sans-serif">Skill Match vs Job Requirements</text>
      {[
        {skill:"React / Next.js", pct:88, color:"#06b6d4"},
        {skill:"TypeScript",       pct:72, color:"#a78bfa"},
        {skill:"Node.js / APIs",   pct:55, color:"#fbbf24"},
        {skill:"System Design",    pct:30, color:"#f87171"},
      ].map((row, i) => (
        <g key={i}>
          <text x="218" y={306+i*14} fill="rgba(255,255,255,0.45)" fontSize="7" fontFamily="Inter,sans-serif">{row.skill}</text>
          <rect x="308" y={299+i*14} width="108" height="5" rx="2.5" fill="rgba(255,255,255,0.05)" />
          <rect x="308" y={299+i*14} width={108*row.pct/100} height="5" rx="2.5" fill={row.color} opacity="0.8" />
          <text x="420" y={305+i*14} fill={row.color} fontSize="6.5" fontFamily="Inter,sans-serif">{row.pct}%</text>
        </g>
      ))}

      {/* RIGHT PANEL — AI Suggestions */}
      <rect x="440" y="44" width="186" height="316" rx="0" fill="rgba(0,0,0,0.2)" />
      <text x="454" y="64" fill="rgba(255,255,255,0.5)" fontSize="9" fontWeight="600" fontFamily="Inter,sans-serif">AI SUGGESTIONS</text>
      {[
        {icon:"⚡",title:"Add quantified metrics",impact:"High Impact",impactC:"#f87171",body:"Add % or ₹ results to each role bullet point."},
        {icon:"🎯",title:"Include target keywords",impact:"High Impact",impactC:"#f87171",body:"'TypeScript','CI/CD','REST API' missing."},
        {icon:"📐",title:"Fix section ordering",impact:"Medium",impactC:"#fbbf24",body:"Move Skills above Experience for ATS."},
        {icon:"✨",title:"Stronger action verbs",impact:"Medium",impactC:"#fbbf24",body:"Replace 'worked on' with 'architected'."},
      ].map((s, i) => (
        <g key={i}>
          <rect x="450" y={72+i*66} width="168" height="58" rx="8"
            fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <text x="462" y={89+i*66} fontSize="13" fontFamily="serif">{s.icon}</text>
          <text x="480" y={89+i*66} fill="rgba(255,255,255,0.75)" fontSize="8" fontWeight="600" fontFamily="Inter,sans-serif">{s.title}</text>
          <rect x="480" y={94+i*66} width={s.impact==="High Impact"?58:44} height="11" rx="5"
            fill={s.impactC==="#f87171"?"rgba(239,68,68,0.15)":"rgba(251,191,36,0.15)"}
            stroke={s.impactC==="#f87171"?"rgba(239,68,68,0.3)":"rgba(251,191,36,0.3)"} strokeWidth="0.7" />
          <text x={509+((s.impact==="High Impact")?0:-7)} y={102+i*66} textAnchor="middle" fill={s.impactC} fontSize="6.5" fontFamily="Inter,sans-serif">{s.impact}</text>
          <text x="462" y={116+i*66} fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="Inter,sans-serif">{s.body}</text>
        </g>
      ))}
      {/* Rewrite button */}
      <rect x="450" y="338" width="168" height="18" rx="9" fill="rgba(167,139,250,0.2)" stroke="rgba(167,139,250,0.4)" strokeWidth="1" />
      <text x="534" y="349.5" textAnchor="middle" fill="#a78bfa" fontSize="8" fontWeight="600" fontFamily="Inter,sans-serif">✨ Rewrite with AI</text>
      <ellipse cx="320" cy="348" rx="260" ry="22" fill="rgba(167,139,250,0.03)" />
    </svg>
  );
}

export function GrowlanzerImage() {
  return (
    <svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="gl-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#050d1f" />
          <stop offset="100%" stopColor="#08101e" />
        </linearGradient>
        <linearGradient id="gl-avatar1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="gl-avatar2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
        <linearGradient id="gl-chart" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="rgba(6,182,212,0)" />
          <stop offset="100%" stopColor="rgba(6,182,212,0.4)" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="url(#gl-bg)" />
      {[80,160,240,320,400,480,560].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="360" stroke="rgba(255,255,255,0.025)" strokeWidth="1"/>
      ))}
      <rect x="0" y="0" width="175" height="360" fill="rgba(0,0,0,0.32)"/>
      <rect x="14" y="14" width="147" height="38" rx="8" fill="rgba(6,182,212,0.1)"/>
      <text x="26" y="37" fill="rgba(6,182,212,0.95)" fontSize="13" fontWeight="800" fontFamily="Inter,sans-serif">Growlanzer</text>
      {["Dashboard","Freelancers","Projects","Payments","Settings"].map((item, i) => (
        <g key={item}>
          <rect x="14" y={66+i*42} width="147" height="34" rx="7" fill={i===0?"rgba(6,182,212,0.15)":"transparent"}/>
          <rect x="22" y={77+i*42} width="12" height="12" rx="3" fill={i===0?"#06b6d4":"rgba(255,255,255,0.18)"}/>
          <text x="42" y={87+i*42} fill={i===0?"#06b6d4":"rgba(255,255,255,0.38)"} fontSize="9.5" fontFamily="Inter,sans-serif">{item}</text>
          {i===0 && <rect x="162" y={74+i*42} width="3" height="22" rx="1.5" fill="#06b6d4"/>}
        </g>
      ))}
      <text x="196" y="42" fill="white" fontSize="15" fontWeight="700" fontFamily="Inter,sans-serif">Dashboard</text>
      <text x="196" y="57" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="Inter,sans-serif">Freelancer Marketplace · Admin Panel</text>
      {[
        {label:"Active Users",value:"1,247",change:"+12%",color:"#06b6d4"},
        {label:"Open Projects",value:"86",change:"+4%",color:"#818cf8"},
        {label:"Pending Review",value:"23",change:"Needs action",color:"#fbbf24"},
        {label:"Revenue MTD",value:"₹48.2K",change:"+8%",color:"#34d399"},
      ].map((s, i) => (
        <g key={i}>
          <rect x={196+i*107} y="72" width="100" height="68" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
          <text x={206+i*107} y="90" fill="rgba(255,255,255,0.42)" fontSize="7" fontFamily="Inter,sans-serif">{s.label}</text>
          <text x={206+i*107} y="112" fill="white" fontSize="16" fontWeight="700" fontFamily="Inter,sans-serif">{s.value}</text>
          <text x={206+i*107} y="130" fill={s.color} fontSize="8" fontFamily="Inter,sans-serif">{s.change}</text>
        </g>
      ))}
      <rect x="196" y="152" width="290" height="90" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="210" y="168" fill="rgba(255,255,255,0.55)" fontSize="9" fontWeight="600" fontFamily="Inter,sans-serif">Monthly Revenue</text>
      <polyline points="210,225 240,210 270,215 300,195 330,205 360,188 390,178 420,172 450,165 470,160" fill="none" stroke="#06b6d4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <polygon points="210,225 240,210 270,215 300,195 330,205 360,188 390,178 420,172 450,165 470,160 470,230 210,230" fill="url(#gl-chart)"/>
      <rect x="196" y="253" width="290" height="90" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="210" y="270" fill="rgba(255,255,255,0.6)" fontSize="9" fontWeight="600" fontFamily="Inter,sans-serif">Pending Approvals</text>
      {[{name:"Alex M.",skill:"React Dev",status:"Pending"},{name:"Sara K.",skill:"UI Design",status:"Review"},{name:"Priya R.",skill:"Node.js",status:"Approved"}].map((row, i) => (
        <g key={i}>
          <circle cx="218" cy={287+i*22} r="8" fill={i%2===0?"#818cf8":"#06b6d4"} opacity="0.8"/>
          <text x="218" y={290+i*22} textAnchor="middle" fill="white" fontSize="6.5" fontFamily="Inter,sans-serif">{row.name[0]}</text>
          <text x="232" y={285+i*22} fill="rgba(255,255,255,0.7)" fontSize="8.5" fontFamily="Inter,sans-serif">{row.name}</text>
          <text x="232" y={296+i*22} fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="Inter,sans-serif">{row.skill}</text>
          <rect x="328" y={281+i*22} width="54" height="14" rx="7" fill={row.status==="Approved"?"rgba(52,211,153,0.15)":row.status==="Review"?"rgba(251,191,36,0.15)":"rgba(6,182,212,0.15)"} stroke={row.status==="Approved"?"rgba(52,211,153,0.3)":row.status==="Review"?"rgba(251,191,36,0.3)":"rgba(6,182,212,0.3)"} strokeWidth="1"/>
          <text x="355" y={291+i*22} textAnchor="middle" fill={row.status==="Approved"?"#34d399":row.status==="Review"?"#fbbf24":"#06b6d4"} fontSize="6.5" fontFamily="Inter,sans-serif">{row.status}</text>
        </g>
      ))}
      <rect x="498" y="72" width="120" height="271" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="512" y="90" fill="rgba(255,255,255,0.5)" fontSize="9" fontWeight="600" fontFamily="Inter,sans-serif">Activity</text>
      {[60,75,45,88,62,92,58,80,70,85].map((h, i) => (
        <rect key={i} x={507+i*9} y={280-h} width="7" height={h} rx="2" fill={i%2===0?"rgba(6,182,212,0.65)":"rgba(129,140,248,0.65)"}/>
      ))}
      <text x="512" y="152" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="Inter,sans-serif">Top Skills</text>
      {["React","Node","Firebase","TS"].map((s, i) => (
        <g key={s}>
          <text x="512" y={172+i*24} fill="rgba(255,255,255,0.5)" fontSize="7.5" fontFamily="Inter,sans-serif">{s}</text>
          <rect x="512" y={176+i*24} width="95" height="4" rx="2" fill="rgba(255,255,255,0.05)"/>
          <rect x="512" y={176+i*24} width={[85,72,60,80][i]} height="4" rx="2" fill={["#06b6d4","#818cf8","#fbbf24","#34d399"][i]} opacity="0.75"/>
        </g>
      ))}
      <ellipse cx="320" cy="340" rx="250" ry="28" fill="rgba(129,140,248,0.03)"/>
    </svg>
  );
}

export function MeetingAppImage() {
  return (
    <svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="mt-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#030810" />
          <stop offset="100%" stopColor="#060d18" />
        </linearGradient>
        <linearGradient id="mt-speaker" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d1a2e" />
          <stop offset="100%" stopColor="#0a1422" />
        </linearGradient>
        <linearGradient id="mt-a1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="mt-a2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
        <linearGradient id="mt-a3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="mt-a4" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <filter id="mt-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="640" height="360" fill="url(#mt-bg)" />

      {/* Subtle grid */}
      {[80,160,240,320,400,480,560].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="360" stroke="rgba(255,255,255,0.015)" strokeWidth="1"/>
      ))}

      {/* Top bar */}
      <rect x="0" y="0" width="640" height="42" fill="rgba(0,0,0,0.5)" />
      <circle cx="16" cy="21" r="5" fill="#ef4444" />
      <circle cx="30" cy="21" r="5" fill="#fbbf24" />
      <circle cx="44" cy="21" r="5" fill="#34d399" />
      <rect x="56" y="12" width="1" height="18" fill="rgba(255,255,255,0.1)" />
      <text x="66" y="25" fill="rgba(255,255,255,0.85)" fontSize="11" fontWeight="600" fontFamily="Inter,sans-serif">Team Standup · Sprint 14</text>
      {/* Recording */}
      <circle cx="275" cy="21" r="4" fill="#ef4444" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite"/>
      </circle>
      <text x="284" y="25" fill="rgba(239,68,68,0.8)" fontSize="9" fontFamily="Inter,sans-serif">REC</text>
      {/* Timer */}
      <text x="318" y="25" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">24:17</text>
      {/* Participants */}
      <rect x="530" y="12" width="96" height="18" rx="9" fill="rgba(6,182,212,0.12)" stroke="rgba(6,182,212,0.25)" strokeWidth="1" />
      <text x="578" y="23.5" textAnchor="middle" fill="#06b6d4" fontSize="8" fontFamily="Inter,sans-serif">👥 4 Participants</text>

      {/* MAIN FEATURED SPEAKER */}
      <rect x="8" y="50" width="400" height="222" rx="10" fill="url(#mt-speaker)" stroke="rgba(6,182,212,0.5)" strokeWidth="2" filter="url(#mt-glow)" />
      {/* Speaker video gradient bg */}
      <defs>
        <radialGradient id="mt-speaker-bg" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="rgba(6,182,212,0.08)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>
      <rect x="8" y="50" width="400" height="222" rx="10" fill="url(#mt-speaker-bg)" />
      {/* Avatar silhouette */}
      <circle cx="208" cy="145" r="42" fill="url(#mt-a2)" opacity="0.15" />
      <circle cx="208" cy="130" r="24" fill="url(#mt-a2)" opacity="0.4" />
      <ellipse cx="208" cy="185" rx="38" ry="18" fill="url(#mt-a2)" opacity="0.25" />
      {/* Speaking indicator */}
      <rect x="8" y="50" width="400" height="222" rx="10" fill="none" stroke="rgba(6,182,212,0.4)" strokeWidth="2" />
      {/* Name tag */}
      <rect x="18" y="246" width="130" height="18" rx="9" fill="rgba(0,0,0,0.7)" />
      <circle cx="30" cy="255" r="5" fill="url(#mt-a2)" />
      <text x="40" y="258.5" fill="white" fontSize="8.5" fontFamily="Inter,sans-serif">Ragadeepan R.</text>
      {/* Muted/unmuted icon */}
      <rect x="372" y="246" width="28" height="18" rx="9" fill="rgba(6,182,212,0.2)" />
      <text x="386" y="258" textAnchor="middle" fill="#06b6d4" fontSize="9" fontFamily="serif">🎙</text>
      {/* ACTIVE SPEAKER label */}
      <rect x="300" y="58" width="96" height="16" rx="8" fill="rgba(6,182,212,0.2)" stroke="rgba(6,182,212,0.4)" strokeWidth="0.8" />
      <text x="348" y="68.5" textAnchor="middle" fill="#06b6d4" fontSize="7.5" fontWeight="600" fontFamily="Inter,sans-serif">● SPEAKING</text>

      {/* RIGHT — Participant tiles */}
      {[
        {name:"Arun K.",grad:"mt-a1",initials:"AK"},
        {name:"Meena S.",grad:"mt-a3",initials:"MS"},
        {name:"Dev T.",grad:"mt-a4",initials:"DT"},
      ].map((p, i) => (
        <g key={i}>
          <rect x="418" y={50+i*76} width="214" height="68" rx="8"
            fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <defs>
            <radialGradient id={`mt-tile-bg-${i}`} cx="40%" cy="40%" r="50%">
              <stop offset="0%" stopColor={["rgba(129,140,248,0.15)","rgba(52,211,153,0.15)","rgba(249,115,22,0.15)"][i]} />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <rect x="418" y={50+i*76} width="214" height="68" rx="8" fill={`url(#mt-tile-bg-${i})`} />
          <circle cx="458" cy={84+i*76} r="18" fill={["url(#mt-a1)","url(#mt-a3)","url(#mt-a4)"][i]} opacity="0.5" />
          <text x="458" y={88+i*76} textAnchor="middle" fill="white" fontSize="11" fontWeight="600" fontFamily="Inter,sans-serif">{p.initials}</text>
          <text x="484" y={80+i*76} fill="rgba(255,255,255,0.75)" fontSize="9" fontFamily="Inter,sans-serif">{p.name}</text>
          <text x="484" y={93+i*76} fill="rgba(255,255,255,0.3)" fontSize="7.5" fontFamily="Inter,sans-serif">
            {["Frontend Engineer","UI Designer","Backend Dev"][i]}
          </text>
          {i===1 && (
            <rect x="555" y={60+i*76} width="66" height="14" rx="7" fill="rgba(52,211,153,0.15)" stroke="rgba(52,211,153,0.3)" strokeWidth="0.8">
            </rect>
          )}
          {i===1 && <text x="588" y={69+i*76} textAnchor="middle" fill="#34d399" fontSize="6.5" fontFamily="Inter,sans-serif">Presenting</text>}
          {/* Mic icon */}
          <rect x="604" y={80+i*76} width="20" height="12" rx="6" fill={i===0?"rgba(239,68,68,0.2)":"rgba(255,255,255,0.06)"} />
          <text x="614" y={89+i*76} textAnchor="middle" fill={i===0?"#f87171":"rgba(255,255,255,0.4)"} fontSize="7" fontFamily="serif">{i===0?"🔇":"🎙"}</text>
        </g>
      ))}

      {/* BOTTOM thumbnail strip */}
      <rect x="0" y="280" width="640" height="44" fill="rgba(0,0,0,0.4)" />
      {[{col:"#818cf8",n:"You"},{col:"#06b6d4",n:"Arun"},{col:"#34d399",n:"Meena"},{col:"#f97316",n:"Dev"},{col:"#a78bfa",n:"Priya"}].map((t,i) => (
        <g key={i}>
          <rect x={10+i*84} y="284" width="78" height="34" rx="6"
            fill="rgba(255,255,255,0.04)" stroke={i===0?"rgba(6,182,212,0.5)":"rgba(255,255,255,0.07)"}
            strokeWidth={i===0?"1.5":"1"} />
          <circle cx={49+i*84} cy="295" r="8" fill={t.col} opacity="0.5" />
          <text x={49+i*84} y="298.5" textAnchor="middle" fill="white" fontSize="6.5" fontWeight="600" fontFamily="Inter,sans-serif">{t.n[0]}</text>
          <text x={49+i*84} y="312" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="Inter,sans-serif">{t.n}</text>
        </g>
      ))}

      {/* CONTROL BAR */}
      <rect x="0" y="322" width="640" height="38" fill="rgba(0,0,0,0.6)" />
      {[
        {icon:"🎙",label:"Mute",active:true},
        {icon:"📷",label:"Video",active:true},
        {icon:"🖥",label:"Share",active:false},
        {icon:"💬",label:"Chat",active:false},
        {icon:"👥",label:"People",active:false},
      ].map((btn, i) => (
        <g key={i}>
          <rect x={168+i*60} y="326" width="44" height="30" rx="8"
            fill={btn.active?"rgba(6,182,212,0.1)":"rgba(255,255,255,0.04)"}
            stroke={btn.active?"rgba(6,182,212,0.25)":"rgba(255,255,255,0.07)"} strokeWidth="1" />
          <text x={190+i*60} y="338.5" textAnchor="middle" fontSize="11" fontFamily="serif">{btn.icon}</text>
          <text x={190+i*60} y="350" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="Inter,sans-serif">{btn.label}</text>
        </g>
      ))}
      {/* End call */}
      <rect x="472" y="326" width="60" height="30" rx="15" fill="rgba(239,68,68,0.85)" />
      <text x="502" y="344.5" textAnchor="middle" fill="white" fontSize="11" fontFamily="serif">📵</text>
      <ellipse cx="320" cy="352" rx="250" ry="16" fill="rgba(6,182,212,0.02)" />
    </svg>
  );
}

export function AIExpenseTrackerImage() {
  return (
    <svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="ae-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#040d1a" />
          <stop offset="100%" stopColor="#081018" />
        </linearGradient>
        <linearGradient id="ae-donut" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#06b6d4"/>
          <stop offset="100%" stopColor="#818cf8"/>
        </linearGradient>
        <radialGradient id="ae-glow" cx="50%" cy="50%" r="40%">
          <stop offset="0%" stopColor="rgba(6,182,212,0.12)"/>
          <stop offset="100%" stopColor="transparent"/>
        </radialGradient>
      </defs>
      <rect width="640" height="360" fill="url(#ae-bg)"/>
      <rect width="640" height="360" fill="url(#ae-glow)"/>
      <rect x="0" y="0" width="640" height="46" fill="rgba(0,0,0,0.3)"/>
      <text x="20" y="27" fill="rgba(6,182,212,0.9)" fontSize="13" fontWeight="800" fontFamily="Inter,sans-serif">💰 AI Expense Tracker</text>
      <rect x="520" y="13" width="100" height="20" rx="10" fill="rgba(6,182,212,0.12)" stroke="rgba(6,182,212,0.25)" strokeWidth="1"/>
      <text x="570" y="26" textAnchor="middle" fill="#06b6d4" fontSize="8.5" fontFamily="Inter,sans-serif">GPT-4 Connected</text>
      <rect x="14" y="58" width="200" height="288" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="26" y="76" fill="rgba(255,255,255,0.6)" fontSize="9" fontWeight="600" fontFamily="Inter,sans-serif">AI Chat Interface</text>
      <rect x="14" y="82" width="200" height="1" fill="rgba(255,255,255,0.05)"/>
      {[
        {msg:"Add ₹450 for lunch today",type:"user",y:96},
        {msg:"✓ Added ₹450 · Food & Dining",type:"ai",y:120},
        {msg:"What did I spend this week?",type:"user",y:148},
        {msg:"Total ₹3,240 this week\n↑18% vs last week",type:"ai",y:172},
        {msg:"Show my top 3 categories",type:"user",y:208},
        {msg:"1. Food ₹1,200\n2. Transport ₹860\n3. Shopping ₹740",type:"ai",y:232},
      ].map((c) => (
        <g key={c.y}>
          <rect x={c.type==="user"?90:22} y={c.y} width={c.type==="user"?112:130} height={c.msg.includes("\n")?28:16} rx="6"
            fill={c.type==="user"?"rgba(6,182,212,0.18)":"rgba(129,140,248,0.15)"}
            stroke={c.type==="user"?"rgba(6,182,212,0.3)":"rgba(129,140,248,0.2)"} strokeWidth="0.5"/>
          {c.msg.split("\n").map((line, li) => (
            <text key={li} x={c.type==="user"?98:30} y={c.y+10+li*11}
              fill={c.type==="user"?"rgba(6,182,212,0.9)":"rgba(200,200,255,0.8)"}
              fontSize="7" fontFamily="Inter,sans-serif">{line}</text>
          ))}
        </g>
      ))}
      <rect x="22" y="316" width="174" height="22" rx="11" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      <text x="34" y="330" fill="rgba(255,255,255,0.2)" fontSize="7.5" fontFamily="Inter,sans-serif">Type your expense...</text>
      <circle cx="186" cy="327" r="7" fill="rgba(6,182,212,0.3)"/>
      <text x="186" y="330" textAnchor="middle" fill="#06b6d4" fontSize="8" fontFamily="Inter,sans-serif">→</text>
      <rect x="228" y="58" width="200" height="180" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="244" y="76" fill="rgba(255,255,255,0.6)" fontSize="9" fontWeight="600" fontFamily="Inter,sans-serif">Spending by Category</text>
      <circle cx="328" cy="155" r="52" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="18"/>
      <circle cx="328" cy="155" r="52" fill="none" stroke="#06b6d4" strokeWidth="18" strokeDasharray="131 196" strokeLinecap="round" transform="rotate(-90 328 155)"/>
      <circle cx="328" cy="155" r="52" fill="none" stroke="#818cf8" strokeWidth="18" strokeDasharray="78 249" strokeLinecap="round" transform="rotate(24 328 155)"/>
      <circle cx="328" cy="155" r="52" fill="none" stroke="#fbbf24" strokeWidth="18" strokeDasharray="52 275" strokeLinecap="round" transform="rotate(102 328 155)"/>
      <circle cx="328" cy="155" r="52" fill="none" stroke="#34d399" strokeWidth="18" strokeDasharray="32 295" strokeLinecap="round" transform="rotate(152 328 155)"/>
      <text x="328" y="150" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="Inter,sans-serif">₹8,240</text>
      <text x="328" y="165" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="Inter,sans-serif">This Month</text>
      {[{c:"#06b6d4",l:"Food",p:"37%"},{c:"#818cf8",l:"Transport",p:"22%"},{c:"#fbbf24",l:"Shopping",p:"18%"},{c:"#34d399",l:"Other",p:"23%"}].map((leg, i) => (
        <g key={i}>
          <rect x={244+i%2*90} y={222+Math.floor(i/2)*16} width="8" height="8" rx="2" fill={leg.c}/>
          <text x={256+i%2*90} y={230+Math.floor(i/2)*16} fill="rgba(255,255,255,0.5)" fontSize="7.5" fontFamily="Inter,sans-serif">{leg.l} {leg.p}</text>
        </g>
      ))}
      <rect x="228" y="248" width="200" height="98" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="244" y="266" fill="rgba(255,255,255,0.6)" fontSize="9" fontWeight="600" fontFamily="Inter,sans-serif">AI Insights</text>
      {["⚠ Food spend 18% above avg","✓ Transport down ₹220 this week","💡 Save ₹600/mo on dining out"].map((ins, i) => (
        <text key={i} x="244" y={284+i*20} fill={i===0?"#fbbf24":i===1?"#34d399":"#06b6d4"} fontSize="7.5" fontFamily="Inter,sans-serif">{ins}</text>
      ))}
      <rect x="440" y="58" width="186" height="288" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="456" y="76" fill="rgba(255,255,255,0.6)" fontSize="9" fontWeight="600" fontFamily="Inter,sans-serif">Recent Transactions</text>
      {[
        {icon:"🍕",name:"Swiggy Order",cat:"Food",amt:"-₹320",c:"#f87171"},
        {icon:"🚌",name:"Uber Ride",cat:"Transport",amt:"-₹180",c:"#f87171"},
        {icon:"💊",name:"Pharmacy",cat:"Health",amt:"-₹240",c:"#f87171"},
        {icon:"💰",name:"Salary Credit",cat:"Income",amt:"+₹45K",c:"#34d399"},
        {icon:"🛒",name:"Amazon",cat:"Shopping",amt:"-₹1,299",c:"#f87171"},
        {icon:"⚡",name:"Electricity",cat:"Bills",amt:"-₹890",c:"#f87171"},
        {icon:"🎬",name:"Netflix",cat:"Entertainment",amt:"-₹649",c:"#f87171"},
      ].map((t, i) => (
        <g key={i}>
          <rect x="452" y={88+i*34} width="160" height="28" rx="6" fill="rgba(255,255,255,0.025)"/>
          <text x="460" y={106+i*34} fontSize="12" fontFamily="serif">{t.icon}</text>
          <text x="478" y={100+i*34} fill="rgba(255,255,255,0.7)" fontSize="8" fontFamily="Inter,sans-serif">{t.name}</text>
          <text x="478" y={112+i*34} fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="Inter,sans-serif">{t.cat}</text>
          <text x="598" y={106+i*34} textAnchor="end" fill={t.c} fontSize="8.5" fontWeight="600" fontFamily="Inter,sans-serif">{t.amt}</text>
        </g>
      ))}
      <ellipse cx="320" cy="340" rx="240" ry="25" fill="rgba(6,182,212,0.03)"/>
    </svg>
  );
}
