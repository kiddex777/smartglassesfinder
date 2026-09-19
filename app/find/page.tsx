"use client";

import { useState } from "react";
import { products } from "../data/products";

type Answers = {
  use: string;
  display: string;
  budget: string;
  camera: string;
  ai: string;
  priority: string;
};

const questions = [
  {
    key: "use",
    title: "What do you mainly want smart glasses for?",
    options: [
      "AI & everyday assistance",
      "Photos & video",
      "Music & calls",
      "AR & virtual displays",
      "Work & productivity",
      "Sports & outdoor use",
    ],
  },
  {
    key: "display",
    title: "Do you want a built-in display?",
    options: ["Yes", "No", "Doesn't matter"],
  },
  {
    key: "budget",
    title: "What's your budget?",
    options: ["Under $300", "$300–$400", "$400–$500", "$500+"],
  },
  {
    key: "camera",
    title: "How important is a camera?",
    options: ["Essential", "Nice to have", "Don't care"],
  },
  {
    key: "ai",
    title: "How important is AI?",
    options: ["Essential", "Important", "Not important"],
  },
  {
    key: "priority",
    title: "What matters most to you?",
    options: [
      "Comfort",
      "Battery life",
      "Camera",
      "Audio",
      "Display quality",
      "Value",
    ],
  },
];

function getRecommendation(answers: Answers) {
  const scoredProducts = products.map((product) => {
    const s = product.scores;

    let earned = 0;
    let possible = 0;

    // PRIMARY USE — 30 points
    possible += 30;

    switch (answers.use) {
      case "AI & everyday assistance":
        earned += ((s?.ai ?? 0) / 10) * 30;
        break;

      case "Photos & video":
        earned += ((s?.camera ?? 0) / 10) * 30;
        break;

      case "Music & calls":
        earned += ((s?.audio ?? 0) / 10) * 30;
        break;

      case "AR & virtual displays":
        earned += ((s?.display ?? 0) / 10) * 30;
        break;

      case "Work & productivity":
        earned +=
          (Math.max(s?.display ?? 0, s?.ai ?? 0) / 10) * 30;
        break;

      case "Sports & outdoor use":
        if (product.id === "oakley-meta-vanguard") {
          earned += 30;
        } else {
          earned += ((s?.comfort ?? 0) / 10) * 15;
        }
        break;
    }

    // DISPLAY — 15 points
    possible += 15;

    if (answers.display === "Yes") {
      earned += ((s?.display ?? 0) / 10) * 15;
    } else if (answers.display === "No") {
      earned +=
        product.display === "None"
          ? 15
          : 0;
    } else {
      earned += 7.5;
    }

    // BUDGET — 15 points
    possible += 15;

    const price = product.price ?? Infinity;

    switch (answers.budget) {
      case "Under $300":
        if (price < 300) earned += 15;
        else if (price === 300) earned += 12;
        else if (price <= 399) earned += 7;
        break;

      case "$300–$400":
        if (price >= 300 && price <= 400) earned += 15;
        else if (price < 300) earned += 12;
        else if (price <= 499) earned += 7;
        break;

      case "$400–$500":
        if (price >= 400 && price <= 500) earned += 15;
        else if (price < 400) earned += 12;
        else if (price <= 599) earned += 7;
        break;

      case "$500+":
        if (price >= 500) earned += 15;
        else earned += 12;
        break;
    }

    // CAMERA — 10 points
    possible += 10;

    if (answers.camera === "Essential") {
      earned += ((s?.camera ?? 0) / 10) * 10;
    } else if (answers.camera === "Nice to have") {
      earned += ((s?.camera ?? 0) / 10) * 6;
    } else {
      earned += 5;
    }

    // AI — 10 points
    possible += 10;

    if (answers.ai === "Essential") {
      earned += ((s?.ai ?? 0) / 10) * 10;
    } else if (answers.ai === "Important") {
      earned += ((s?.ai ?? 0) / 10) * 6;
    } else {
      earned += 5;
    }

    // PERSONAL PRIORITY — 15 points
    possible += 15;

    switch (answers.priority) {
      case "Comfort":
        earned += ((s?.comfort ?? 0) / 10) * 15;
        break;

      case "Battery life":
        earned += ((s?.battery ?? 0) / 10) * 15;
        break;

      case "Camera":
        earned += ((s?.camera ?? 0) / 10) * 15;
        break;

      case "Audio":
        earned += ((s?.audio ?? 0) / 10) * 15;
        break;

      case "Display quality":
        earned += ((s?.display ?? 0) / 10) * 15;
        break;

      case "Value":
        earned += ((s?.value ?? 0) / 10) * 15;
        break;
    }

    const matchPercentage = Math.round(
      (earned / possible) * 100,
    );

    return {
      product,
      score: matchPercentage,
    };
  });

  scoredProducts.sort((a, b) => b.score - a.score);

  return scoredProducts;
}
 
export default function FindPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    use: "",
    display: "",
    budget: "",
    camera: "",
    ai: "",
    priority: "",
  });

  const [results, setResults] = useState<
    ReturnType<typeof getRecommendation> | null
  >(null);

  const currentQuestion = questions[step];

  function selectAnswer(value: string) {
    const key = currentQuestion.key as keyof Answers;

    const updatedAnswers = {
      ...answers,
      [key]: value,
    };

    setAnswers(updatedAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setResults(getRecommendation(updatedAnswers));
    }
  }

  function restart() {
    setStep(0);
    setResults(null);
    setAnswers({
      use: "",
      display: "",
      budget: "",
      camera: "",
      ai: "",
      priority: "",
    });
  }

function goBack() {
  if (step > 0) {
    setStep(step - 1);
  }
}

 if (results) {
 const winner = results[0];
const runnerUp = results[1];
const thirdPlace = results[2];

const matchPercentage = winner.score;

    return (
      <main className="min-h-screen bg-white text-slate-900">
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Smart Glasses Finder
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Your best match
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
              Based on your answers, this is the smart glasses we think fit
              your needs best.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex h-72 items-center justify-center bg-slate-100">
              {winner.product.image ? (
                <img
                  src={winner.product.image}
                  alt={winner.product.name}
                  className="h-full w-full object-contain p-8"
                />
              ) : (
                <span className="text-8xl">👓</span>
              )}
            </div>

            <div className="p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                🏆 Best Match
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {winner.product.name}
              </h2>

              <p className="mt-2 text-lg text-slate-600">
                {winner.product.bestFor}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
  {matchPercentage}% Match
</span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
               Overall editorial score: {winner.product.rating}/10
                </span>

                {winner.product.price !== null && (
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                    ${winner.product.price} {winner.product.currency}
                  </span>
                )}
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                {winner.product.description}
              </p>
<div className="mt-8 rounded-2xl bg-slate-50 p-6">
  <h3 className="text-lg font-bold text-slate-900">
    Why we picked it
  </h3>

  <ul className="mt-4 space-y-3 text-slate-600">
    {answers.use && (
      <li className="flex gap-3">
        <span className="font-bold text-blue-600">✓</span>
        <span>
          It matches your main goal of{" "}
          <strong>{answers.use.toLowerCase()}</strong>.
        </span>
      </li>
    )}

    {answers.display && (
      <li className="flex gap-3">
        <span className="font-bold text-blue-600">✓</span>
        <span>
          Your display preference is{" "}
          <strong>{answers.display.toLowerCase()}</strong>.
        </span>
      </li>
    )}

    {answers.budget && (
      <li className="flex gap-3">
        <span className="font-bold text-blue-600">✓</span>
        <span>
          It was evaluated against your{" "}
          <strong>{answers.budget}</strong> budget.
        </span>
      </li>
    )}

    {answers.camera && (
      <li className="flex gap-3">
        <span className="font-bold text-blue-600">✓</span>
        <span>
          You said camera importance is{" "}
          <strong>{answers.camera.toLowerCase()}</strong>, and this model
          scored {winner.product.scores?.camera ?? 0}/10 for camera
          performance.
        </span>
      </li>
    )}

    {answers.ai && (
      <li className="flex gap-3">
        <span className="font-bold text-blue-600">✓</span>
        <span>
          You rated AI as{" "}
          <strong>{answers.ai.toLowerCase()}</strong>, and this model
          scored {winner.product.scores?.ai ?? 0}/10 for AI.
        </span>
      </li>
    )}

    {answers.priority && (
      <li className="flex gap-3">
        <span className="font-bold text-blue-600">✓</span>
        <span>
          Your top priority was <strong>{answers.priority.toLowerCase()}</strong>.
        </span>
      </li>
    )}
  </ul>
</div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
  <a
    href={`/reviews/${winner.product.slug}`}
    className="rounded-full bg-blue-600 px-7 py-3 text-center font-semibold text-white hover:bg-blue-700"
  >
    Read Full Review →
  </a>

  {winner.product.affiliateUrl && (
  <a
  href={winner.product.affiliateUrl}
  target="_blank"
  rel="nofollow sponsored noopener"
  data-affiliate="true"
      className="rounded-full border border-slate-300 px-7 py-3 text-center font-semibold text-slate-900 hover:border-slate-400"
    >
      Check Price →
    </a>
  )}
</div>
            </div>
          </div>
<div className="mt-10 grid gap-6 md:grid-cols-2">
  {runnerUp && (
    <div className="rounded-3xl border border-slate-200 p-7">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        🥈 Also Consider
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        {runnerUp.product.name}
      </h3>

      <p className="mt-2 text-slate-600">
        {runnerUp.product.bestFor}
      </p>

      <p className="mt-3 text-sm font-semibold text-blue-600">
        Match score: {runnerUp.score}
      </p>

      <a
        href={`/reviews/${runnerUp.product.slug}`}
        className="mt-5 inline-block font-semibold text-blue-600 hover:text-blue-700"
      >
        View Review →
      </a>
    </div>
  )}

  {thirdPlace && (
    <div className="rounded-3xl border border-slate-200 p-7">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        🥉 Another Good Option
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        {thirdPlace.product.name}
      </h3>

      <p className="mt-2 text-slate-600">
        {thirdPlace.product.bestFor}
      </p>

      <p className="mt-3 text-sm font-semibold text-blue-600">
        Match score: {thirdPlace.score}
      </p>

      <a
        href={`/reviews/${thirdPlace.product.slug}`}
        className="mt-5 inline-block font-semibold text-blue-600 hover:text-blue-700"
      >
        View Review →
      </a>
    </div>
  )}
</div>

          <button
            onClick={restart}
            className="mt-10 rounded-full border border-slate-300 px-6 py-3 font-semibold hover:border-slate-400"
          >
            Start Over
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Smart Glasses Finder
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Find the right smart glasses for you
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Answer six quick questions and we'll recommend the smart glasses
            that best match your needs, priorities, and budget.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-8">
          <div className="flex justify-between text-sm font-semibold">
            <span>
              Question {step + 1} of {questions.length}
            </span>

            <span>
              {Math.round(((step + 1) / questions.length) * 100)}%
            </span>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full bg-blue-600 transition-all"
              style={{
                width: `${((step + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {step > 0 && (
  <button
    onClick={goBack}
    className="mb-6 font-semibold text-slate-500 hover:text-slate-900"
  >
    ← Back
  </button>
)}

        <div className="rounded-3xl border border-slate-200 p-7 shadow-sm md:p-10">
          <h2 className="text-2xl font-bold md:text-3xl">
            {currentQuestion.title}
          </h2>

          <div className="mt-8 grid gap-3">
           {currentQuestion.options.map((option) => {
  const key = currentQuestion.key as keyof Answers;
  const isSelected = answers[key] === option;

  return (
    <button
      key={option}
      onClick={() => selectAnswer(option)}
      className={`rounded-2xl border p-5 text-left font-semibold transition ${
        isSelected
          ? "border-blue-600 bg-blue-50 text-blue-700"
          : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <span>{option}</span>

        {isSelected && (
          <span className="text-blue-600">✓</span>
        )}
      </div>
    </button>
  );
})}
          </div>
        </div>
      </section>
    </main>
  );
}