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
      {/* Grid lines */}
      {[80,160,240,320,400,480,560].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="360" stroke="rgba(255,255,255,0.025)" strokeWidth="1"/>
      ))}
      {/* Sidebar */}
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
      {/* Main content */}
      <text x="196" y="42" fill="white" fontSize="15" fontWeight="700" fontFamily="Inter,sans-serif">Dashboard</text>
      <text x="196" y="57" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="Inter,sans-serif">Freelancer Marketplace · Admin Panel</text>
      {/* Stat cards */}
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
      {/* Area chart */}
      <rect x="196" y="152" width="290" height="90" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="210" y="168" fill="rgba(255,255,255,0.55)" fontSize="9" fontWeight="600" fontFamily="Inter,sans-serif">Monthly Revenue</text>
      <polyline points="210,225 240,210 270,215 300,195 330,205 360,188 390,178 420,172 450,165 470,160" fill="none" stroke="#06b6d4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <polygon points="210,225 240,210 270,215 300,195 330,205 360,188 390,178 420,172 450,165 470,160 470,230 210,230" fill="url(#gl-chart)"/>
      {/* Table */}
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
      {/* Right panel */}
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
      {/* Header bar */}
      <rect x="0" y="0" width="640" height="46" fill="rgba(0,0,0,0.3)"/>
      <text x="20" y="27" fill="rgba(6,182,212,0.9)" fontSize="13" fontWeight="800" fontFamily="Inter,sans-serif">💰 AI Expense Tracker</text>
      <rect x="520" y="13" width="100" height="20" rx="10" fill="rgba(6,182,212,0.12)" stroke="rgba(6,182,212,0.25)" strokeWidth="1"/>
      <text x="570" y="26" textAnchor="middle" fill="#06b6d4" fontSize="8.5" fontFamily="Inter,sans-serif">GPT-4 Connected</text>
      {/* Chatbot panel - left */}
      <rect x="14" y="58" width="200" height="288" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="26" y="76" fill="rgba(255,255,255,0.6)" fontSize="9" fontWeight="600" fontFamily="Inter,sans-serif">AI Chat Interface</text>
      <rect x="14" y="82" width="200" height="1" fill="rgba(255,255,255,0.05)"/>
      {/* Chat messages */}
      {[
        {msg:"Add ₹450 for lunch today",type:"user",y:96},
        {msg:"✓ Added ₹450 · Food & Dining",type:"ai",y:120},
        {msg:"What did I spend this week?",type:"user",y:148},
        {msg:"Total ₹3,240 this week\n↑18% vs last week",type:"ai",y:172},
        {msg:"Show my top 3 categories",type:"user",y:208},
        {msg:"1. Food ₹1,200\n2. Transport ₹860\n3. Shopping ₹740",type:"ai",y:232},
      ].map((c) => (
        <g key={c.y}>
          <rect
            x={c.type==="user"?90:22} y={c.y}
            width={c.type==="user"?112:130}
            height={c.msg.includes("\n")?28:16}
            rx="6"
            fill={c.type==="user"?"rgba(6,182,212,0.18)":"rgba(129,140,248,0.15)"}
            stroke={c.type==="user"?"rgba(6,182,212,0.3)":"rgba(129,140,248,0.2)"}
            strokeWidth="0.5"
          />
          {c.msg.split("\n").map((line, li) => (
            <text key={li} x={c.type==="user"?98:30} y={c.y+10+li*11}
              fill={c.type==="user"?"rgba(6,182,212,0.9)":"rgba(200,200,255,0.8)"}
              fontSize="7" fontFamily="Inter,sans-serif">{line}</text>
          ))}
        </g>
      ))}
      {/* Input bar */}
      <rect x="22" y="316" width="174" height="22" rx="11" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      <text x="34" y="330" fill="rgba(255,255,255,0.2)" fontSize="7.5" fontFamily="Inter,sans-serif">Type your expense...</text>
      <circle cx="186" cy="327" r="7" fill="rgba(6,182,212,0.3)"/>
      <text x="186" y="330" textAnchor="middle" fill="#06b6d4" fontSize="8" fontFamily="Inter,sans-serif">→</text>
      {/* Center - donut chart */}
      <rect x="228" y="58" width="200" height="180" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="244" y="76" fill="rgba(255,255,255,0.6)" fontSize="9" fontWeight="600" fontFamily="Inter,sans-serif">Spending by Category</text>
      {/* Donut */}
      <circle cx="328" cy="155" r="52" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="18"/>
      <circle cx="328" cy="155" r="52" fill="none" stroke="#06b6d4" strokeWidth="18" strokeDasharray="131 196" strokeLinecap="round" transform="rotate(-90 328 155)"/>
      <circle cx="328" cy="155" r="52" fill="none" stroke="#818cf8" strokeWidth="18" strokeDasharray="78 249" strokeLinecap="round" transform="rotate(24 328 155)"/>
      <circle cx="328" cy="155" r="52" fill="none" stroke="#fbbf24" strokeWidth="18" strokeDasharray="52 275" strokeLinecap="round" transform="rotate(102 328 155)"/>
      <circle cx="328" cy="155" r="52" fill="none" stroke="#34d399" strokeWidth="18" strokeDasharray="32 295" strokeLinecap="round" transform="rotate(152 328 155)"/>
      <text x="328" y="150" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="Inter,sans-serif">₹8,240</text>
      <text x="328" y="165" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="Inter,sans-serif">This Month</text>
      {/* Legend */}
      {[{c:"#06b6d4",l:"Food",p:"37%"},{c:"#818cf8",l:"Transport",p:"22%"},{c:"#fbbf24",l:"Shopping",p:"18%"},{c:"#34d399",l:"Other",p:"23%"}].map((leg, i) => (
        <g key={i}>
          <rect x={244+i%2*90} y={222+Math.floor(i/2)*16} width="8" height="8" rx="2" fill={leg.c}/>
          <text x={256+i%2*90} y={230+Math.floor(i/2)*16} fill="rgba(255,255,255,0.5)" fontSize="7.5" fontFamily="Inter,sans-serif">{leg.l} {leg.p}</text>
        </g>
      ))}
      {/* Center - insights */}
      <rect x="228" y="248" width="200" height="98" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="244" y="266" fill="rgba(255,255,255,0.6)" fontSize="9" fontWeight="600" fontFamily="Inter,sans-serif">AI Insights</text>
      {["⚠ Food spend 18% above avg","✓ Transport down ₹220 this week","💡 Save ₹600/mo on dining out"].map((ins, i) => (
        <g key={i}>
          <text x="244" y={284+i*20} fill={i===0?"#fbbf24":i===1?"#34d399":"#06b6d4"} fontSize="7.5" fontFamily="Inter,sans-serif">{ins}</text>
        </g>
      ))}
      {/* Right - recent transactions */}
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

export function GymAppImage() {
  return (
    <svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="gym-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#050c18" />
          <stop offset="100%" stopColor="#080f1c" />
        </linearGradient>
        <linearGradient id="gym-bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#818cf8"/>
          <stop offset="100%" stopColor="#a78bfa"/>
        </linearGradient>
        <linearGradient id="gym-bar2" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#06b6d4"/>
          <stop offset="100%" stopColor="#22d3ee"/>
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="url(#gym-bg)"/>
      {/* Header */}
      <rect x="0" y="0" width="640" height="46" fill="rgba(0,0,0,0.28)"/>
      <text x="20" y="27" fill="rgba(129,140,248,0.95)" fontSize="13" fontWeight="800" fontFamily="Inter,sans-serif">💪 GymPro Manager</text>
      {/* Online tag */}
      <rect x="520" y="14" width="100" height="18" rx="9" fill="rgba(52,211,153,0.12)" stroke="rgba(52,211,153,0.25)" strokeWidth="1"/>
      <circle cx="530" cy="23" r="3" fill="#34d399"/>
      <text x="537" y="26.5" fill="#34d399" fontSize="8" fontFamily="Inter,sans-serif">Live Dashboard</text>
      {/* Sidebar */}
      <rect x="0" y="46" width="160" height="314" fill="rgba(0,0,0,0.22)"/>
      {["Members","Workouts","Schedule","Payments","Reports"].map((item, i) => (
        <g key={item}>
          <rect x="10" y={60+i*44} width="140" height="34" rx="7" fill={i===0?"rgba(129,140,248,0.15)":"transparent"}/>
          <rect x="18" y={71+i*44} width="11" height="11" rx="3" fill={i===0?"#818cf8":"rgba(255,255,255,0.18)"}/>
          <text x="36" y={81+i*44} fill={i===0?"#818cf8":"rgba(255,255,255,0.38)"} fontSize="9" fontFamily="Inter,sans-serif">{item}</text>
          {i===0 && <rect x="148" y={68+i*44} width="3" height="20" rx="1.5" fill="#818cf8"/>}
        </g>
      ))}
      {/* Main area */}
      <text x="178" y="64" fill="white" fontSize="15" fontWeight="700" fontFamily="Inter,sans-serif">Members Overview</text>
      <text x="178" y="78" fill="rgba(255,255,255,0.32)" fontSize="9" fontFamily="Inter,sans-serif">Gym Management System · Firebase</text>
      {/* Stats */}
      {[
        {label:"Total Members",value:"342",change:"+12 this month",color:"#818cf8"},
        {label:"Active Today",value:"87",change:"25% attendance",color:"#06b6d4"},
        {label:"Renewals Due",value:"24",change:"Next 7 days",color:"#fbbf24"},
        {label:"Revenue",value:"₹1.2L",change:"+6% MoM",color:"#34d399"},
      ].map((s, i) => (
        <g key={i}>
          <rect x={178+i*113} y="90" width="106" height="68" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
          <text x={188+i*113} y="108" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="Inter,sans-serif">{s.label}</text>
          <text x={188+i*113} y="130" fill="white" fontSize="18" fontWeight="700" fontFamily="Inter,sans-serif">{s.value}</text>
          <text x={188+i*113} y="148" fill={s.color} fontSize="7.5" fontFamily="Inter,sans-serif">{s.change}</text>
        </g>
      ))}
      {/* Member table */}
      <rect x="178" y="170" width="295" height="182" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="194" y="188" fill="rgba(255,255,255,0.65)" fontSize="9" fontWeight="600" fontFamily="Inter,sans-serif">Member Directory</text>
      <rect x="178" y="195" width="295" height="1" fill="rgba(255,255,255,0.05)"/>
      {[
        {name:"Karthik S.",plan:"Gold",status:"Active",days:"28d left"},
        {name:"Meena R.",plan:"Silver",status:"Active",days:"14d left"},
        {name:"Arun K.",plan:"Platinum",status:"Active",days:"45d left"},
        {name:"Divya P.",plan:"Gold",status:"Expired",days:"Renew"},
        {name:"Ravi M.",plan:"Silver",status:"Active",days:"7d left"},
      ].map((m, i) => (
        <g key={i}>
          <circle cx="196" cy={210+i*28} r="9" fill={["#818cf8","#06b6d4","#a78bfa","#64748b","#06b6d4"][i]} opacity="0.8"/>
          <text x="196" y={214+i*28} textAnchor="middle" fill="white" fontSize="6.5" fontFamily="Inter,sans-serif">{m.name[0]}</text>
          <text x="212" y={207+i*28} fill="rgba(255,255,255,0.75)" fontSize="8.5" fontFamily="Inter,sans-serif">{m.name}</text>
          <text x="212" y={218+i*28} fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="Inter,sans-serif">{m.plan}</text>
          <rect x="295" y={204+i*28} width="52" height="14" rx="7" fill={m.status==="Active"?"rgba(52,211,153,0.15)":"rgba(239,68,68,0.15)"} stroke={m.status==="Active"?"rgba(52,211,153,0.3)":"rgba(239,68,68,0.3)"} strokeWidth="1"/>
          <text x="321" y={214+i*28} textAnchor="middle" fill={m.status==="Active"?"#34d399":"#f87171"} fontSize="6.5" fontFamily="Inter,sans-serif">{m.status}</text>
          <text x="364" y={214+i*28} fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="Inter,sans-serif">{m.days}</text>
        </g>
      ))}
      {/* Right charts */}
      <rect x="485" y="170" width="140" height="90" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="499" y="188" fill="rgba(255,255,255,0.55)" fontSize="9" fontWeight="600" fontFamily="Inter,sans-serif">Weekly Check-ins</text>
      {[62,78,55,88,70,92,60].map((h, i) => (
        <g key={i}>
          <rect x={497+i*15} y={238-h*0.42} width="10" height={h*0.42} rx="3" fill="url(#gym-bar)" opacity="0.8"/>
          <text x={502+i*15} y="252" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="Inter,sans-serif">{["M","T","W","T","F","S","S"][i]}</text>
        </g>
      ))}
      <rect x="485" y="272" width="140" height="80" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="499" y="290" fill="rgba(255,255,255,0.55)" fontSize="9" fontWeight="600" fontFamily="Inter,sans-serif">Plan Distribution</text>
      {[{l:"Platinum",p:25,c:"#a78bfa"},{l:"Gold",p:45,c:"#fbbf24"},{l:"Silver",p:30,c:"#94a3b8"}].map((plan,i) => (
        <g key={i}>
          <text x="499" y={305+i*14} fill="rgba(255,255,255,0.45)" fontSize="7.5" fontFamily="Inter,sans-serif">{plan.l}</text>
          <rect x="550" y={299+i*14} width="68" height="5" rx="2.5" fill="rgba(255,255,255,0.05)"/>
          <rect x="550" y={299+i*14} width={68*plan.p/100} height="5" rx="2.5" fill={plan.c} opacity="0.8"/>
        </g>
      ))}
      <ellipse cx="320" cy="345" rx="250" ry="22" fill="rgba(129,140,248,0.03)"/>
    </svg>
  );
}
