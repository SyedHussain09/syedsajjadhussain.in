"use client";

import Link from "next/link";
import { useState } from "react";
import { proofMap, skillGroups } from "@/data/skills";

export function SkillsProof() {
  const [activeSkill, setActiveSkill] = useState(proofMap[0].skill);
  const active = proofMap.find((item) => item.skill === activeSkill) || proofMap[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="surface rounded-md p-5">
            <h3 className="text-lg font-semibold">{group.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{group.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => {
                const proof = proofMap.find((item) =>
                  skill.toLowerCase().includes(item.skill.toLowerCase())
                );
                return (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => proof && setActiveSkill(proof.skill)}
                    className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                      proof
                        ? "border-accent/45 bg-accent/10 text-[#07534e] hover:bg-accent/18"
                        : "border-border bg-white text-muted"
                    }`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </article>
        ))}
      </div>
      <aside className="surface sticky top-24 h-fit rounded-md p-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-2">Skill map</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {proofMap.map((item) => (
            <button
              key={item.skill}
              type="button"
              onClick={() => setActiveSkill(item.skill)}
              className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] ${
                item.skill === activeSkill
                  ? "border-accent bg-[#e7f7f3] text-foreground"
                  : "border-border bg-white text-muted"
              }`}
            >
              {item.skill}
            </button>
          ))}
        </div>
        <div className="mt-6 rounded-md border border-border bg-white p-5">
          <h3 className="text-2xl font-semibold">{active.proof}</h3>
          <p className="mt-3 leading-7 text-muted">{active.description}</p>
          <Link href={active.href} className="mt-5 inline-flex font-semibold text-accent-2 hover:text-foreground">
            View project
          </Link>
        </div>
      </aside>
    </div>
  );
}
