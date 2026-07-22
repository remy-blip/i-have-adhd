(() => {
  "use strict";

  const sections = [
    {
      id: "A",
      title: "Intention & expectations",
      desc: "Why you’re here, and what you expect from therapy.",
      questions: [
        {
          id: "Q1",
          type: "text",
          prompt: "What is your main reason for considering psilocybin therapy?",
          placeholder: "e.g. food compulsion, depression, trauma, curiosity…",
        },
        {
          id: "Q2",
          type: "ynu",
          prompt: "Do you believe one session will permanently fix the problem?",
          score: { Y: -2, N: 2, U: 0 },
          riskIf: ["Y"],
          strengthIf: ["N"],
        },
        {
          id: "Q3",
          type: "ynu",
          prompt:
            "Are you willing to do preparation and integration work with a professional (not just the medicine day)?",
          score: { Y: 2, N: -2, U: 0 },
          riskIf: ["N"],
          strengthIf: ["Y"],
        },
        {
          id: "Q4",
          type: "ynu",
          prompt: "Is your primary goal weight loss or “appetite kill”?",
          score: { Y: -2, N: 1, U: 0 },
          riskIf: ["Y"],
          noteIfY: "Weight-loss goals belong with medical / ED care, not psychedelic DIY.",
        },
      ],
    },
    {
      id: "B",
      title: "Psychiatric safety",
      desc: "Hard safety screens used in clinical research pathways.",
      questions: [
        {
          id: "Q5",
          type: "ynu",
          prompt:
            "Current thoughts of suicide with a plan or intent, or ability to stay safe feels shaky?",
          score: { Y: 0, N: 2, U: 0 },
          stopIf: ["Y", "U"],
          stopLabel: "Safety / suicide risk unclear or present — seek crisis or clinical help now.",
          strengthIf: ["N"],
        },
        {
          id: "Q6",
          type: "ynu",
          prompt: "Personal history of psychosis, schizophrenia, or schizophreniform illness?",
          score: { Y: 0, N: 2, U: -2 },
          stopIf: ["Y"],
          stopLabel: "Personal psychosis history — STOP pending specialty evaluation.",
          strengthIf: ["N"],
        },
        {
          id: "Q7",
          type: "ynu",
          prompt: "Personal history of bipolar I or manic episode?",
          score: { Y: 0, N: 1, U: -2 },
          stopIf: ["Y"],
          stopLabel: "Bipolar I / mania history — STOP pending specialty clearance.",
        },
        {
          id: "Q8",
          type: "ynu",
          prompt: "First-degree family history of psychosis or bipolar I?",
          score: { Y: -2, N: 1, U: -1 },
          riskIf: ["Y"],
        },
        {
          id: "Q9",
          type: "ynu",
          prompt: "Psychiatric hospitalization in the last 12 months?",
          score: { Y: -2, N: 1, U: -1 },
          riskIf: ["Y"],
        },
        {
          id: "Q10",
          type: "ynu",
          prompt:
            "Are you in active trauma flooding / daily panic that feels unmanageable without support?",
          score: { Y: -2, N: 1, U: -1 },
          riskIf: ["Y"],
        },
      ],
    },
    {
      id: "C",
      title: "Medical & medicines",
      desc: "Physical health and medication flags for clinician review.",
      questions: [
        {
          id: "Q11",
          type: "ynu",
          prompt: "Pregnancy, trying to conceive, or breastfeeding?",
          score: { Y: 0, N: 1, U: -2 },
          stopIf: ["Y"],
          stopLabel: "Pregnancy / breastfeeding — STOP.",
        },
        {
          id: "Q12",
          type: "ynu",
          prompt:
            "Known serious heart disease, uncontrolled blood pressure, or prior heart attack/stroke?",
          score: { Y: 0, N: 1, U: -2 },
          stopIf: ["Y"],
          stopLabel: "Cardiac risk — STOP pending physician / cardiology clearance.",
        },
        {
          id: "Q13",
          type: "ynu",
          prompt: "Seizure disorder or serious neurological disease under active treatment?",
          score: { Y: -2, N: 1, U: -1 },
          riskIf: ["Y"],
        },
        {
          id: "Q14",
          type: "ynu",
          prompt:
            "Currently taking MAOIs, lithium, or other medicines your clinician has flagged as psychedelic-relevant?",
          score: { Y: -2, N: 1, U: -2 },
          riskIf: ["Y", "U"],
          note: "Drug interactions need clinician/pharmacist review — this tool cannot adjudicate them.",
        },
        {
          id: "Q15",
          type: "ynu",
          prompt:
            "Heavy daily alcohol use, benzodiazepine dependence, or other unstable substance dependence right now?",
          score: { Y: -2, N: 1, U: -1 },
          riskIf: ["Y"],
        },
      ],
    },
    {
      id: "D",
      title: "Eating & addiction context",
      desc: "Especially relevant if food compulsion or binge eating is the goal.",
      questions: [
        {
          id: "Q16",
          type: "ynu",
          prompt:
            "Active binge-and-purge cycles, severe food restriction, or medically unstable eating disorder?",
          score: { Y: -2, N: 1, U: -1 },
          riskIf: ["Y"],
          noteIfY: "Prefer specialty eating-disorder care first.",
        },
        {
          id: "Q17",
          type: "ynuna",
          prompt:
            "If food compulsion / addiction is the goal: are you already connected to therapy or medical care for it?",
          score: { Y: 2, N: -1, U: 0, NA: 0 },
          strengthIf: ["Y"],
          riskIf: ["N"],
        },
        {
          id: "Q18",
          type: "ynu",
          prompt: "Do you expect psilocybin alone (no therapy) to resolve addiction or binge eating?",
          score: { Y: -2, N: 2, U: 0 },
          riskIf: ["Y"],
          strengthIf: ["N"],
        },
      ],
    },
    {
      id: "E",
      title: "Supports & setting",
      desc: "Who holds the container, and where recovery happens.",
      questions: [
        {
          id: "Q19",
          type: "ynu",
          prompt: "Do you have a sober, trusted human who can be present for a supervised session day?",
          score: { Y: 2, N: -2, U: -1 },
          strengthIf: ["Y"],
          riskIf: ["N"],
        },
        {
          id: "Q20",
          type: "ynu",
          prompt: "Stable private place to recover for 24–48 hours afterward?",
          score: { Y: 2, N: -2, U: -1 },
          strengthIf: ["Y"],
          riskIf: ["N"],
        },
        {
          id: "Q21",
          type: "ynu",
          prompt: "Planning to do this entirely alone, without any clinical or sober support?",
          score: { Y: 0, N: 2, U: -2 },
          stopIf: ["Y"],
          stopLabel: "Unsupervised solo pathway — STOP.",
          strengthIf: ["N"],
        },
        {
          id: "Q22",
          type: "ynu",
          prompt: "Major life crisis this week (eviction, acute grief, violence) with no stability?",
          score: { Y: -2, N: 1, U: -1 },
          riskIf: ["Y"],
        },
      ],
    },
    {
      id: "F",
      title: "Access & legality",
      desc: "Regulated routes only. This tool will not help obtain illegal supply.",
      questions: [
        {
          id: "Q23",
          type: "ynu",
          prompt:
            "Are you pursuing a legal / regulated route (licensed service, legal prescription context, or clinical trial) rather than informal illegal supply?",
          score: { Y: 2, N: -2, U: -1 },
          strengthIf: ["Y"],
          riskIf: ["N"],
          noteIfN: "Informal supply often carries legal and purity risk. Seek regulated pathways only.",
        },
        {
          id: "Q24",
          type: "ynu",
          prompt: "Willing to postpone if screening with a licensed clinician says wait?",
          score: { Y: 2, N: -2, U: 0 },
          strengthIf: ["Y"],
          riskIf: ["N"],
        },
      ],
    },
  ];

  const state = {
    sectionIndex: 0,
    answers: {},
    unlocked: new Set([0]),
  };

  const els = {
    welcome: document.getElementById("view-welcome"),
    assess: document.getElementById("view-assess"),
    results: document.getElementById("view-results"),
    scoringPanel: document.getElementById("scoring-panel"),
    form: document.getElementById("question-form"),
    sectionKicker: document.getElementById("section-kicker"),
    sectionTitle: document.getElementById("section-title"),
    sectionDesc: document.getElementById("section-desc"),
    progressText: document.getElementById("progress-text"),
    progressFill: document.getElementById("progress-fill"),
    progressBar: document.getElementById("progress-bar"),
    livePoints: document.getElementById("live-points"),
    liveStops: document.getElementById("live-stops"),
    btnStart: document.getElementById("btn-start"),
    btnHow: document.getElementById("btn-how"),
    btnBack: document.getElementById("btn-back"),
    btnNext: document.getElementById("btn-next"),
    btnRestart: document.getElementById("btn-restart"),
    btnPrint: document.getElementById("btn-print"),
    resultLabel: document.getElementById("result-label"),
    resultSummary: document.getElementById("result-summary"),
    meterValue: document.getElementById("meter-value"),
    meterScore: document.getElementById("meter-score"),
    meterCaption: document.getElementById("meter-caption"),
    stopList: document.getElementById("stop-list"),
    riskList: document.getElementById("risk-list"),
    strengthList: document.getElementById("strength-list"),
    sectionBars: document.getElementById("section-bars"),
    nextAction: document.getElementById("next-action"),
    chips: [...document.querySelectorAll(".section-chip")],
  };

  function showView(name) {
    for (const view of [els.welcome, els.assess, els.results]) {
      view.hidden = true;
      view.classList.remove("view-active");
    }
    const target = els[name];
    target.hidden = false;
    // reflow for animation restart
    void target.offsetWidth;
    target.classList.add("view-active");
  }

  function allQuestions() {
    return sections.flatMap((section) => section.questions);
  }

  function answeredCount() {
    return allQuestions().filter((q) => {
      const value = state.answers[q.id];
      return value !== undefined && value !== "";
    }).length;
  }

  function choiceButtons(name, options) {
    return options
      .map(
        ([value, label]) => `
      <label class="choice">
        <input type="radio" name="${name}" value="${value}" />
        <span>${label}</span>
      </label>`
      )
      .join("");
  }

  function renderSection() {
    const section = sections[state.sectionIndex];
    els.sectionKicker.textContent = `Section ${section.id}`;
    els.sectionTitle.textContent = section.title;
    els.sectionDesc.textContent = section.desc;
    els.btnBack.disabled = state.sectionIndex === 0;
    els.btnNext.textContent =
      state.sectionIndex === sections.length - 1 ? "See results" : "Continue";

    els.form.innerHTML = section.questions
      .map((q, index) => {
        const saved = state.answers[q.id] ?? "";
        let control = "";
        if (q.type === "text") {
          control = `<input class="text-input" name="${q.id}" type="text" maxlength="280" placeholder="${q.placeholder}" value="${escapeAttr(saved)}" />`;
        } else if (q.type === "ynu") {
          control = `<div class="choice-row">${choiceButtons(q.id, [
            ["Y", "Yes"],
            ["N", "No"],
            ["U", "Not sure"],
          ])}</div>`;
        } else if (q.type === "ynuna") {
          control = `<div class="choice-row">${choiceButtons(q.id, [
            ["Y", "Yes"],
            ["N", "No"],
            ["U", "Not sure"],
            ["NA", "N/A"],
          ])}</div>`;
        }
        const note = q.note ? `<p class="section-desc">${q.note}</p>` : "";
        return `
          <div class="question" style="animation-delay:${index * 40}ms">
            <label class="question-label" for="${q.id}">
              <span class="question-id">${q.id}</span>${q.prompt}
            </label>
            ${note}
            ${control}
          </div>`;
      })
      .join("");

    for (const q of section.questions) {
      if (q.type === "text") continue;
      const saved = state.answers[q.id];
      if (!saved) continue;
      const input = els.form.querySelector(`input[name="${q.id}"][value="${saved}"]`);
      if (input) input.checked = true;
    }

    updateChips();
    updateLiveScore();
    updateProgress();
  }

  function escapeAttr(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll('"', "&quot;")
      .replaceAll("<", "&lt;");
  }

  function collectCurrentSection() {
    const section = sections[state.sectionIndex];
    for (const q of section.questions) {
      if (q.type === "text") {
        const input = els.form.querySelector(`[name="${q.id}"]`);
        state.answers[q.id] = (input?.value || "").trim();
      } else {
        const selected = els.form.querySelector(`input[name="${q.id}"]:checked`);
        if (!selected) return { ok: false, missing: q.id };
        state.answers[q.id] = selected.value;
      }
    }
    // Q1 required non-empty
    if (!state.answers.Q1) return { ok: false, missing: "Q1" };
    return { ok: true };
  }

  function scoreAnswer(question, value) {
    if (!value || value === "") {
      return { points: -1, stop: false, unknown: true };
    }
    if (question.type === "text") {
      const cureLike = /fix (my|everything|my life)|one session.*cure|permanently cure/i.test(value);
      return { points: cureLike ? -2 : 0, stop: false, unknown: false, cureLike };
    }
    const points = question.score?.[value] ?? 0;
    const stop = Array.isArray(question.stopIf) && question.stopIf.includes(value);
    return { points, stop, unknown: false };
  }

  function compute() {
    const stops = [];
    const risks = [];
    const strengths = [];
    let points = 0;
    const bySection = sections.map((section) => {
      let sectionPoints = 0;
      let maxAbs = 0;
      for (const q of section.questions) {
        const value = state.answers[q.id];
        const scored = scoreAnswer(q, value);
        points += scored.points;
        sectionPoints += scored.points;
        maxAbs += 2;
        if (scored.stop) {
          stops.push(q.stopLabel || `${q.id} triggered a STOP flag`);
        }
        if (q.riskIf && q.riskIf.includes(value)) {
          risks.push(q.noteIfY && value === "Y" ? q.noteIfY : shorten(q.prompt));
        }
        if (q.noteIfN && value === "N") risks.push(q.noteIfN);
        if (q.strengthIf && q.strengthIf.includes(value)) {
          strengths.push(shorten(q.prompt));
        }
        if (scored.cureLike) risks.push("Expectation that one session permanently fixes everything");
      }
      return {
        id: section.id,
        title: section.title,
        points: sectionPoints,
        maxAbs,
      };
    });

    let result;
    let summary;
    let next;
    if (stops.length) {
      result = "STOP";
      summary =
        "One or more hard safety flags fired. Do not treat this as a green light. Stabilize with licensed care first.";
      next =
        "Contact a licensed clinician or crisis resource today, and pause any psychedelic plans until you are cleared.";
    } else if (points <= 0) {
      result = "STOP";
      summary = "Readiness points are at or below zero. Stabilize supports and clinical care before seeking a session.";
      next = "Book a visit with a primary-care or mental-health clinician to review risks and supports.";
    } else if (points <= 10) {
      result = "CAUTION";
      summary = "Several gaps showed up. Address them before any regulated pathway intake.";
      next = "Strengthen sober support, clinical follow-up, and expectations — then retake this screen.";
    } else if (points <= 20) {
      result = "CAUTION → CONDITIONAL";
      summary = "Possible with a clinician-led plan, but not a clearance. Close the caution items first.";
      next = "Bring these results to a licensed clinician and ask about regulated trials or legal service centers.";
    } else {
      result = "CONDITIONAL-GO";
      summary =
        "It may be reasonable to seek regulated assessment/intake. This is still not medical clearance or a dosing plan.";
      next =
        "Schedule a regulated intake or clinical-trial screen, and keep preparation + integration with professionals.";
    }

    return {
      points,
      stops,
      risks: unique(risks).slice(0, 3),
      strengths: unique(strengths).slice(0, 3),
      bySection,
      result,
      summary,
      next,
    };
  }

  function shorten(text) {
    return text.length > 88 ? `${text.slice(0, 85)}…` : text;
  }

  function unique(items) {
    return [...new Set(items)];
  }

  function updateProgress() {
    const count = answeredCount();
    const total = allQuestions().length;
    const pct = Math.round((count / total) * 100);
    els.progressText.textContent = `${count} / ${total}`;
    els.progressFill.style.width = `${pct}%`;
    els.progressBar.setAttribute("aria-valuenow", String(count));
  }

  function updateLiveScore() {
    const { points, stops } = compute();
    els.livePoints.textContent = String(points);
    if (stops.length) {
      els.liveStops.textContent = `${stops.length} STOP flag${stops.length > 1 ? "s" : ""}`;
      els.liveStops.classList.add("has-stop");
    } else {
      els.liveStops.textContent = "No STOP flags yet";
      els.liveStops.classList.remove("has-stop");
    }
  }

  function updateChips() {
    els.chips.forEach((chip, index) => {
      chip.classList.toggle("is-current", index === state.sectionIndex);
      chip.classList.toggle("is-done", state.unlocked.has(index) && index < state.sectionIndex);
      chip.disabled = !state.unlocked.has(index);
    });
  }

  function renderResults() {
    const report = compute();
    els.resultLabel.textContent = report.result;
    els.resultLabel.classList.remove("is-stop", "is-caution", "is-go");
    if (report.result === "STOP") els.resultLabel.classList.add("is-stop");
    else if (report.result.includes("CAUTION")) els.resultLabel.classList.add("is-caution");
    else els.resultLabel.classList.add("is-go");

    els.resultSummary.textContent = report.summary;
    els.meterScore.textContent = String(report.points);
    const clamped = Math.max(0, Math.min(32, report.points));
    const offset = 327 - (327 * clamped) / 32;
    requestAnimationFrame(() => {
      els.meterValue.style.strokeDashoffset = String(offset);
      els.meterValue.style.stroke =
        report.result === "STOP" ? "#9b2f2f" : report.result.includes("CAUTION") ? "#9a6b16" : "#1f4d3a";
    });
    els.meterCaption.textContent =
      report.stops.length > 0
        ? "STOP flags override the meter."
        : "Higher is more ready to seek regulated intake — not clearance.";

    if (report.stops.length) {
      els.stopList.classList.remove("is-clear");
      els.stopList.innerHTML = report.stops.map((item) => `<li>${item}</li>`).join("");
    } else {
      els.stopList.classList.add("is-clear");
      els.stopList.innerHTML = "<li>No hard STOP flags.</li>";
    }

    els.riskList.innerHTML = (report.risks.length ? report.risks : ["No major scored risks highlighted."])
      .map((item) => `<li>${item}</li>`)
      .join("");
    els.strengthList.innerHTML = (report.strengths.length
      ? report.strengths
      : ["Keep building supports and realistic expectations."]
    )
      .map((item) => `<li>${item}</li>`)
      .join("");

    els.sectionBars.innerHTML = report.bySection
      .map((section) => {
        const width = Math.max(0, Math.min(100, ((section.points + section.maxAbs) / (section.maxAbs * 2)) * 100));
        return `
          <div class="bar-row">
            <span>${section.id} · ${section.title.split(" ")[0]}</span>
            <div class="bar-track"><div class="bar-fill" data-width="${width}"></div></div>
            <strong>${section.points > 0 ? "+" : ""}${section.points}</strong>
          </div>`;
      })
      .join("");

    requestAnimationFrame(() => {
      for (const fill of els.sectionBars.querySelectorAll(".bar-fill")) {
        fill.style.width = `${fill.getAttribute("data-width")}%`;
      }
    });

    els.nextAction.textContent = report.next;
  }

  function persist() {
    try {
      localStorage.setItem(
        "prat24-dashboard",
        JSON.stringify({ answers: state.answers, sectionIndex: state.sectionIndex })
      );
    } catch {
      /* ignore */
    }
  }

  function restore() {
    try {
      const raw = localStorage.getItem("prat24-dashboard");
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed?.answers) state.answers = parsed.answers;
    } catch {
      /* ignore */
    }
  }

  els.btnStart.addEventListener("click", () => {
    showView("assess");
    renderSection();
  });

  els.btnHow.addEventListener("click", () => {
    els.scoringPanel.hidden = !els.scoringPanel.hidden;
  });

  els.btnBack.addEventListener("click", () => {
    collectCurrentSection();
    persist();
    state.sectionIndex = Math.max(0, state.sectionIndex - 1);
    renderSection();
  });

  els.btnNext.addEventListener("click", () => {
    const collected = collectCurrentSection();
    if (!collected.ok) {
      const node =
        els.form.querySelector(`[name="${collected.missing}"]`) ||
        els.form.querySelector(`input[name="${collected.missing}"]`);
      node?.focus?.();
      els.form.animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(-4px)" },
          { transform: "translateX(4px)" },
          { transform: "translateX(0)" },
        ],
        { duration: 280 }
      );
      return;
    }
    persist();
    updateLiveScore();
    if (state.sectionIndex >= sections.length - 1) {
      showView("results");
      renderResults();
      return;
    }
    state.sectionIndex += 1;
    state.unlocked.add(state.sectionIndex);
    renderSection();
  });

  els.form.addEventListener("change", () => {
    collectCurrentSection();
    updateLiveScore();
    updateProgress();
    persist();
  });

  els.form.addEventListener("input", () => {
    collectCurrentSection();
    updateProgress();
    persist();
  });

  els.chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      if (chip.disabled) return;
      collectCurrentSection();
      state.sectionIndex = Number(chip.dataset.section);
      renderSection();
    });
  });

  els.btnRestart.addEventListener("click", () => {
    state.sectionIndex = 0;
    state.answers = {};
    state.unlocked = new Set([0]);
    persist();
    showView("welcome");
  });

  els.btnPrint.addEventListener("click", () => window.print());

  restore();
})();
