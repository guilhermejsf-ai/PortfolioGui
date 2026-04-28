"use client";

import Image from "next/image";
import { startTransition, useEffect, useMemo, useState } from "react";
import instagramIcon from "@/stores/instagram-vector-logo-icon-social-media-logotype_901408-392.avif";

import { TravelEntry, TravelGroup } from "@/data/travel";
import { cn } from "@/lib/utils";

type TravelSelectorProps = {
  groups: TravelGroup[];
};

const groupOrder = [
  "lived-in",
  "featured",
  "eu-projects",
  "roadtrips",
  "more",
] as const;

const groupOrderMap = new Map<string, number>(
  groupOrder.map((slug, index) => [slug, index]),
);

type TravelTheme = {
  panel: string;
  previewShell: string;
  previewInner: string;
  surface: string;
  iconActive: string;
  iconTone: string;
};

const defaultTheme: TravelTheme = {
  panel: "border-[#dde3eb] bg-[#f9fbfd]",
  previewShell: "border-[#c7d3e2] bg-[#dde9f5]",
  previewInner: "bg-white/90",
  surface: "border-[#d7e0ea] bg-white/78",
  iconActive:
    "border-[#9bb3cf] bg-white shadow-[0_14px_34px_rgba(116,143,176,0.16)]",
  iconTone: "bg-panel-alt",
};

const groupThemes: Record<string, TravelTheme> = {
  "lived-in": {
    panel: "border-[#dde4ec] bg-[#f9fbfd]",
    previewShell: "border-[#c7d3e2] bg-[#dde9f5]",
    previewInner: "bg-white/88",
    surface: "border-[#d7e1ec] bg-white/78",
    iconActive:
      "border-[#9db0c6]/70 bg-white shadow-[0_14px_34px_rgba(116,143,176,0.16)]",
    iconTone: "bg-panel-alt",
  },
  featured: {
    panel: "border-[#eadfd5] bg-[#fff8f3]",
    previewShell:
      "border-[#e5b094]/60 bg-[linear-gradient(135deg,#ffd2bf_0%,#ffe5d9_100%)]",
    previewInner: "bg-white/84",
    surface: "border-[#efd9ce] bg-[#fff3ed]",
    iconActive:
      "border-[#e5b094]/70 bg-white shadow-[0_14px_34px_rgba(216,142,101,0.16)]",
    iconTone: "bg-[#fff2ea]",
  },
  roadtrips: {
    panel: "border-[#e7e1d8] bg-[#fffaf4]",
    previewShell:
      "border-[#c6a16d]/60 bg-[linear-gradient(135deg,#f2dcc0_0%,#f8e9d4_100%)]",
    previewInner: "bg-white/84",
    surface: "border-[#eadfce] bg-[#fff4e8]",
    iconActive:
      "border-[#c6a16d]/70 bg-white shadow-[0_14px_34px_rgba(161,125,72,0.16)]",
    iconTone: "bg-[#fff3e5]",
  },
  "eu-projects": {
    panel: "border-[#dde4e9] bg-[#f7fbfc]",
    previewShell:
      "border-[#8ea9b8]/60 bg-[linear-gradient(135deg,#d9ebf3_0%,#eff6f9_100%)]",
    previewInner: "bg-white/86",
    surface: "border-[#d8e3e8] bg-[#eef6f8]",
    iconActive:
      "border-[#8ea9b8]/70 bg-white shadow-[0_14px_34px_rgba(106,140,160,0.16)]",
    iconTone: "bg-[#eef5f8]",
  },
  more: {
    panel: "border-[#e5e2dd] bg-[#fbfaf8]",
    previewShell:
      "border-[#b5aba0]/60 bg-[linear-gradient(135deg,#ece6df_0%,#f6f2ee_100%)]",
    previewInner: "bg-white/88",
    surface: "border-[#e4dfd8] bg-[#f5f2ee]",
    iconActive:
      "border-[#b5aba0]/70 bg-white shadow-[0_14px_34px_rgba(128,116,104,0.14)]",
    iconTone: "bg-[#f3f0eb]",
  },
};

function createEntryTheme(
  base: TravelTheme,
  overrides: Partial<TravelTheme>,
): TravelTheme {
  return {
    ...base,
    ...overrides,
  };
}

const entryThemes: Record<string, TravelTheme> = {
  "lisbon-portugal": createEntryTheme(groupThemes["lived-in"], {
    panel: "border-[#d8e7de] bg-[#f6fcf7]",
    previewShell:
      "border-[#7aa78d]/55 bg-[linear-gradient(135deg,#d8f0de_0%,#f6ddd8_100%)]",
    surface: "border-[#d7e5dc] bg-[#eff8f1]",
    iconActive:
      "border-[#7aa78d]/70 bg-white shadow-[0_14px_34px_rgba(97,145,116,0.16)]",
    iconTone: "bg-[#edf8ef]",
  }),
  "cluj-romania": createEntryTheme(groupThemes["lived-in"], {
    panel: "border-[#d8dff0] bg-[#f8faff]",
    previewShell:
      "border-[#86a6d8]/55 bg-[linear-gradient(135deg,#d9e7ff_0%,#fff0c9_100%)]",
    surface: "border-[#dbe3f2] bg-[#f1f6ff]",
    iconActive:
      "border-[#86a6d8]/70 bg-white shadow-[0_14px_34px_rgba(110,144,199,0.16)]",
    iconTone: "bg-[#eef4ff]",
  }),
  "prague-czech-republic": createEntryTheme(groupThemes["lived-in"], {
    panel: "border-[#dde3ee] bg-[#fafbff]",
    previewShell:
      "border-[#8ca0c8]/55 bg-[linear-gradient(135deg,#e7efff_0%,#f8dde0_100%)]",
    surface: "border-[#e0e6f1] bg-[#f5f8ff]",
    iconActive:
      "border-[#8ca0c8]/70 bg-white shadow-[0_14px_34px_rgba(119,141,181,0.15)]",
    iconTone: "bg-[#f1f5ff]",
  }),
  "valladolid-spain": createEntryTheme(groupThemes["lived-in"], {
    panel: "border-[#efe0cb] bg-[#fffaf2]",
    previewShell:
      "border-[#cf9f58]/60 bg-[linear-gradient(135deg,#ffe1ae_0%,#ffd7c8_100%)]",
    surface: "border-[#eedfca] bg-[#fff4e7]",
    iconActive:
      "border-[#cf9f58]/70 bg-white shadow-[0_14px_34px_rgba(188,141,67,0.16)]",
    iconTone: "bg-[#fff1de]",
  }),
  "seoul-south-korea": createEntryTheme(groupThemes.featured, {
    panel: "border-[#e5dfeb] bg-[#fcf9ff]",
    previewShell:
      "border-[#8598be]/55 bg-[linear-gradient(135deg,#f7d9e4_0%,#dce8ff_100%)]",
    surface: "border-[#e7dfef] bg-[#f8f4ff]",
    iconActive:
      "border-[#8598be]/65 bg-white shadow-[0_14px_34px_rgba(125,143,183,0.16)]",
    iconTone: "bg-[#faf2f7]",
  }),
  "rio-brazil": createEntryTheme(groupThemes.featured, {
    panel: "border-[#d9ead7] bg-[#f7fdf4]",
    previewShell:
      "border-[#7aaa56]/60 bg-[linear-gradient(135deg,#d9f0c8_0%,#ffe08c_100%)]",
    surface: "border-[#dcebd8] bg-[#eef8e8]",
    iconActive:
      "border-[#7aaa56]/70 bg-white shadow-[0_14px_34px_rgba(112,164,71,0.16)]",
    iconTone: "bg-[#edf8e7]",
  }),
  "budapest-hungary": createEntryTheme(groupThemes.featured, {
    panel: "border-[#e5ddd7] bg-[#fffaf7]",
    previewShell:
      "border-[#9aab7a]/60 bg-[linear-gradient(135deg,#f9ddd8_0%,#e7f0db_100%)]",
    surface: "border-[#e8e0db] bg-[#fbf3ee]",
    iconActive:
      "border-[#9aab7a]/65 bg-white shadow-[0_14px_34px_rgba(139,155,97,0.15)]",
    iconTone: "bg-[#fff1ed]",
  }),
  "chiang-mai-thailand": createEntryTheme(groupThemes.featured, {
    panel: "border-[#ead8d2] bg-[#fff8f3]",
    previewShell:
      "border-[#c7805b]/60 bg-[linear-gradient(135deg,#ffd8c6_0%,#ffe9b8_100%)]",
    surface: "border-[#ecdcd5] bg-[#fff2eb]",
    iconActive:
      "border-[#c7805b]/65 bg-white shadow-[0_14px_34px_rgba(195,122,83,0.16)]",
    iconTone: "bg-[#fff0e8]",
  }),
  "england-uk-roadtrip": createEntryTheme(groupThemes.roadtrips, {
    panel: "border-[#e9dcdb] bg-[#fff8f7]",
    previewShell:
      "border-[#d16d67]/60 bg-[linear-gradient(135deg,#ffe0df_0%,#fff2ec_100%)]",
    surface: "border-[#ecdfde] bg-[#fff1ef]",
    iconActive:
      "border-[#d16d67]/70 bg-white shadow-[0_14px_34px_rgba(193,98,92,0.16)]",
    iconTone: "bg-[#fff0ef]",
  }),
  "wales-uk-roadtrip": createEntryTheme(groupThemes.roadtrips, {
    panel: "border-[#dde8de] bg-[#f8fdf8]",
    previewShell:
      "border-[#7ea56c]/60 bg-[linear-gradient(135deg,#e1f1dc_0%,#ffe3df_100%)]",
    surface: "border-[#dfe9e0] bg-[#eef8ee]",
    iconActive:
      "border-[#7ea56c]/70 bg-white shadow-[0_14px_34px_rgba(108,150,90,0.15)]",
    iconTone: "bg-[#edf7ee]",
  }),
  "scotland-uk-roadtrip": createEntryTheme(groupThemes.roadtrips, {
    panel: "border-[#dbe2f1] bg-[#f8fbff]",
    previewShell:
      "border-[#7390c7]/60 bg-[linear-gradient(135deg,#dce9ff_0%,#eff5ff_100%)]",
    surface: "border-[#dee5f3] bg-[#eef4ff]",
    iconActive:
      "border-[#7390c7]/70 bg-white shadow-[0_14px_34px_rgba(99,131,192,0.16)]",
    iconTone: "bg-[#edf4ff]",
  }),
  "albania-balkan-roadtrip": createEntryTheme(groupThemes.roadtrips, {
    panel: "border-[#ead8db] bg-[#fff7f8]",
    previewShell:
      "border-[#b55562]/60 bg-[linear-gradient(135deg,#f4d6da_0%,#ffe8ec_100%)]",
    surface: "border-[#ecdde0] bg-[#fff0f2]",
    iconActive:
      "border-[#b55562]/70 bg-white shadow-[0_14px_34px_rgba(171,78,91,0.16)]",
    iconTone: "bg-[#ffeff2]",
  }),
  "bulgaria-balkan-roadtrip": createEntryTheme(groupThemes.roadtrips, {
    panel: "border-[#dde6db] bg-[#fbfdf8]",
    previewShell:
      "border-[#88a86d]/60 bg-[linear-gradient(135deg,#edf4e3_0%,#f7d8d8_100%)]",
    surface: "border-[#e0e8de] bg-[#f2f8ef]",
    iconActive:
      "border-[#88a86d]/70 bg-white shadow-[0_14px_34px_rgba(122,150,94,0.15)]",
    iconTone: "bg-[#eef6ea]",
  }),
  "croatia-balkan-roadtrip": createEntryTheme(groupThemes.roadtrips, {
    panel: "border-[#dde4f0] bg-[#f9fbff]",
    previewShell:
      "border-[#7e95bf]/60 bg-[linear-gradient(135deg,#ffe2e2_0%,#dfe8ff_100%)]",
    surface: "border-[#e0e6f2] bg-[#f2f6ff]",
    iconActive:
      "border-[#7e95bf]/70 bg-white shadow-[0_14px_34px_rgba(113,134,179,0.16)]",
    iconTone: "bg-[#f2f5ff]",
  }),
  "north-macedonia-balkan-roadtrip": createEntryTheme(groupThemes.roadtrips, {
    panel: "border-[#efe0c9] bg-[#fffaf1]",
    previewShell:
      "border-[#d29945]/60 bg-[linear-gradient(135deg,#ffe3ac_0%,#ffd5b5_100%)]",
    surface: "border-[#efe0ca] bg-[#fff3e2]",
    iconActive:
      "border-[#d29945]/70 bg-white shadow-[0_14px_34px_rgba(197,142,57,0.16)]",
    iconTone: "bg-[#fff0dd]",
  }),
  "montenegro-balkan-roadtrip": createEntryTheme(groupThemes.roadtrips, {
    panel: "border-[#ead8d7] bg-[#fff8f6]",
    previewShell:
      "border-[#ad6a57]/60 bg-[linear-gradient(135deg,#f0d1c7_0%,#f4e3cb_100%)]",
    surface: "border-[#ecdcd9] bg-[#fff0ec]",
    iconActive:
      "border-[#ad6a57]/70 bg-white shadow-[0_14px_34px_rgba(152,92,74,0.16)]",
    iconTone: "bg-[#fff0eb]",
  }),
  "turkey-eu-projects": createEntryTheme(groupThemes["eu-projects"], {
    panel: "border-[#ead8dc] bg-[#fff7f8]",
    previewShell:
      "border-[#cb6871]/60 bg-[linear-gradient(135deg,#f8d6da_0%,#ffecee_100%)]",
    surface: "border-[#eddde1] bg-[#fff0f2]",
    iconActive:
      "border-[#cb6871]/70 bg-white shadow-[0_14px_34px_rgba(195,89,102,0.16)]",
    iconTone: "bg-[#fff0f3]",
  }),
  "cyprus-eu-projects": createEntryTheme(groupThemes["eu-projects"], {
    panel: "border-[#ebe2d4] bg-[#fffaf4]",
    previewShell:
      "border-[#c59d69]/60 bg-[linear-gradient(135deg,#f5e1c4_0%,#f9efe3_100%)]",
    surface: "border-[#ede4d7] bg-[#fbf3e8]",
    iconActive:
      "border-[#c59d69]/70 bg-white shadow-[0_14px_34px_rgba(176,134,81,0.16)]",
    iconTone: "bg-[#faf0e2]",
  }),
  "bulgaria-eu-projects": createEntryTheme(groupThemes["eu-projects"], {
    panel: "border-[#dde7dc] bg-[#f9fdf8]",
    previewShell:
      "border-[#8ea86f]/60 bg-[linear-gradient(135deg,#f0f6e7_0%,#f8dddd_100%)]",
    surface: "border-[#e0e9df] bg-[#f2f8ef]",
    iconActive:
      "border-[#8ea86f]/70 bg-white shadow-[0_14px_34px_rgba(126,151,93,0.15)]",
    iconTone: "bg-[#eef7ea]",
  }),
  "spain-eu-projects": createEntryTheme(groupThemes["eu-projects"], {
    panel: "border-[#e7dfcf] bg-[#fffaf2]",
    previewShell:
      "border-[#b79d64]/60 bg-[linear-gradient(135deg,#ffe0a9_0%,#d9ebff_100%)]",
    surface: "border-[#e9e0d2] bg-[#faf2e6]",
    iconActive:
      "border-[#b79d64]/70 bg-white shadow-[0_14px_34px_rgba(165,139,84,0.16)]",
    iconTone: "bg-[#fbf1df]",
  }),
  "portugal-eu-projects": createEntryTheme(groupThemes["eu-projects"], {
    panel: "border-[#d8e7de] bg-[#f6fcf7]",
    previewShell:
      "border-[#7aa78d]/55 bg-[linear-gradient(135deg,#d8f0de_0%,#f6ddd8_100%)]",
    surface: "border-[#d7e5dc] bg-[#eff8f1]",
    iconActive:
      "border-[#7aa78d]/70 bg-white shadow-[0_14px_34px_rgba(97,145,116,0.16)]",
    iconTone: "bg-[#edf8ef]",
  }),
  italy: createEntryTheme(groupThemes.more, {
    panel: "border-[#dce7df] bg-[#f8fdf9]",
    previewShell:
      "border-[#87ab8d]/60 bg-[linear-gradient(135deg,#e0f0e4_0%,#ffe1dd_100%)]",
    surface: "border-[#dfe8e2] bg-[#eff8f1]",
    iconActive:
      "border-[#87ab8d]/70 bg-white shadow-[0_14px_34px_rgba(118,153,124,0.15)]",
    iconTone: "bg-[#eff7f1]",
  }),
  malta: createEntryTheme(groupThemes.more, {
    panel: "border-[#ece2d8] bg-[#fffaf6]",
    previewShell:
      "border-[#c79f7b]/60 bg-[linear-gradient(135deg,#f9e6d8_0%,#fff0ea_100%)]",
    surface: "border-[#eee4db] bg-[#fbf2eb]",
    iconActive:
      "border-[#c79f7b]/70 bg-white shadow-[0_14px_34px_rgba(184,141,102,0.15)]",
    iconTone: "bg-[#fbefe7]",
  }),
  netherlands: createEntryTheme(groupThemes.more, {
    panel: "border-[#e9dfda] bg-[#fffaf8]",
    previewShell:
      "border-[#d38255]/60 bg-[linear-gradient(135deg,#ffd9c7_0%,#dfe9ff_100%)]",
    surface: "border-[#ece2dd] bg-[#fdf3ee]",
    iconActive:
      "border-[#d38255]/70 bg-white shadow-[0_14px_34px_rgba(202,124,76,0.15)]",
    iconTone: "bg-[#fff0e8]",
  }),
  belgium: createEntryTheme(groupThemes.more, {
    panel: "border-[#e8dfd0] bg-[#fffaf2]",
    previewShell:
      "border-[#b89e54]/60 bg-[linear-gradient(135deg,#f6e4aa_0%,#f7ecce_100%)]",
    surface: "border-[#ebe1d3] bg-[#faf2e2]",
    iconActive:
      "border-[#b89e54]/70 bg-white shadow-[0_14px_34px_rgba(165,141,72,0.15)]",
    iconTone: "bg-[#f9f0dc]",
  }),
  austria: createEntryTheme(groupThemes.more, {
    panel: "border-[#eddcdc] bg-[#fff9f9]",
    previewShell:
      "border-[#ca7a78]/60 bg-[linear-gradient(135deg,#ffe1e1_0%,#fff0f0_100%)]",
    surface: "border-[#efdfdf] bg-[#fff2f2]",
    iconActive:
      "border-[#ca7a78]/70 bg-white shadow-[0_14px_34px_rgba(192,113,112,0.15)]",
    iconTone: "bg-[#fff0f0]",
  }),
  germany: createEntryTheme(groupThemes.more, {
    panel: "border-[#ece1cf] bg-[#fffaf2]",
    previewShell:
      "border-[#be9b48]/60 bg-[linear-gradient(135deg,#f5dea0_0%,#f7edd0_100%)]",
    surface: "border-[#eee4d4] bg-[#fbf3e4]",
    iconActive:
      "border-[#be9b48]/70 bg-white shadow-[0_14px_34px_rgba(171,137,58,0.15)]",
    iconTone: "bg-[#faf0de]",
  }),
  morocco: createEntryTheme(groupThemes.more, {
    panel: "border-[#ead9da] bg-[#fff8f8]",
    previewShell:
      "border-[#b56167]/60 bg-[linear-gradient(135deg,#f4d6d7_0%,#e6f0de_100%)]",
    surface: "border-[#ecddde] bg-[#fff1f1]",
    iconActive:
      "border-[#b56167]/70 bg-white shadow-[0_14px_34px_rgba(170,89,98,0.15)]",
    iconTone: "bg-[#fff0f1]",
  }),
  greece: createEntryTheme(groupThemes.more, {
    panel: "border-[#dbe4f3] bg-[#f9fbff]",
    previewShell:
      "border-[#7596c7]/60 bg-[linear-gradient(135deg,#dce9ff_0%,#eef5ff_100%)]",
    surface: "border-[#dee7f4] bg-[#eff5ff]",
    iconActive:
      "border-[#7596c7]/70 bg-white shadow-[0_14px_34px_rgba(101,135,190,0.15)]",
    iconTone: "bg-[#edf5ff]",
  }),
  serbia: createEntryTheme(groupThemes.more, {
    panel: "border-[#dfdfeb] bg-[#fafaff]",
    previewShell:
      "border-[#7d87b9]/60 bg-[linear-gradient(135deg,#ffe0e0_0%,#dfe6ff_100%)]",
    surface: "border-[#e3e3ee] bg-[#f3f4ff]",
    iconActive:
      "border-[#7d87b9]/70 bg-white shadow-[0_14px_34px_rgba(112,123,174,0.15)]",
    iconTone: "bg-[#f2f3ff]",
  }),
  "united-arab-emirates": createEntryTheme(groupThemes.more, {
    panel: "border-[#dde6dc] bg-[#f9fdf8]",
    previewShell:
      "border-[#7f9d6f]/60 bg-[linear-gradient(135deg,#e3f1dd_0%,#ffe0e0_100%)]",
    surface: "border-[#e1e9df] bg-[#f1f8ef]",
    iconActive:
      "border-[#7f9d6f]/70 bg-white shadow-[0_14px_34px_rgba(113,143,94,0.15)]",
    iconTone: "bg-[#eef7eb]",
  }),
};

function getEntryTheme(entry: TravelEntry) {
  return entryThemes[entry.slug] ?? groupThemes[entry.group] ?? defaultTheme;
}

function getInitialSelectedSlug(groups: TravelGroup[]) {
  return groups[0]?.items[0]?.slug ?? "";
}

function getGroupLabel(entry: TravelEntry) {
  switch (entry.group) {
    case "lived-in":
      return "Lived In";
    case "featured":
      return "Featured";
    case "roadtrips":
      return "Roadtrips";
    case "eu-projects":
      return "EU Projects";
    case "more":
      return "More";
  }
}

const visitedCitiesByEntry: Record<string, string[]> = {
  "lisbon-portugal": [
    "Lisbon",
    "Guimaraes",
    "Aveiro",
    "Braga",
    "Braganca",
    "Faro",
    "Porto",
    "Quarteira",
    "Ribeira de Pena",
    "Sines",
    "Viana do Castelo",
  ],
  "cluj-romania": [
    "Cluj-Napoca",
    "Alba Iulia",
    "Bucharest",
    "Sibiu",
    "Sighisoara",
    "Turda",
    "Timisoara",
    "Brasov",
    "Bran",
  ],
  "prague-czech-republic": ["Prague", "Karlovy Vary", "Cesky Krumlov"],
  "valladolid-spain": [
    "Valladolid",
    "Zaragoza",
    "Santa Cruz de Tenerife",
    "Los Cristianos",
    "Barcelona",
    "Salamanca",
    "Oviedo",
    "Gijon",
    "Valencia",
    "Madrid",
    "Seville",
    "Agaete",
    "Las Palmas",
    "Huelva",
  ],
  "seoul-south-korea": ["Seoul", "Busan"],
  "rio-brazil": ["Rio de Janeiro"],
  "budapest-hungary": ["Budapest"],
  "chiang-mai-thailand": [
    "Chiang Mai",
    "Bangkok",
    "Phuket",
    "Krabi",
    "Khao Sok",
    "Koh Samui",
  ],
  "england-uk-roadtrip": [
    "London",
    "Oxford",
    "Liverpool",
    "Carlisle",
    "Kendal",
    "Llandudno",
    "Edinburgh",
  ],
  "wales-uk-roadtrip": [
    "London",
    "Oxford",
    "Liverpool",
    "Carlisle",
    "Kendal",
    "Llandudno",
    "Edinburgh",
  ],
  "scotland-uk-roadtrip": [
    "London",
    "Oxford",
    "Liverpool",
    "Carlisle",
    "Kendal",
    "Llandudno",
    "Edinburgh",
  ],
  "albania-balkan-roadtrip": [
    "Tirana",
    "Varna",
    "Sofia",
    "Plovdiv",
    "Zadar",
    "Split",
    "Hvar",
    "Dubrovnik",
    "Skopje",
    "Budva",
  ],
  "bulgaria-balkan-roadtrip": [
    "Tirana",
    "Varna",
    "Sofia",
    "Plovdiv",
    "Stara Zagora",
    "Zadar",
    "Split",
    "Hvar",
    "Dubrovnik",
    "Skopje",
    "Budva",
  ],
  "croatia-balkan-roadtrip": [
    "Tirana",
    "Varna",
    "Sofia",
    "Plovdiv",
    "Zadar",
    "Split",
    "Hvar",
    "Dubrovnik",
    "Skopje",
    "Budva",
  ],
  "north-macedonia-balkan-roadtrip": [
    "Tirana",
    "Varna",
    "Sofia",
    "Plovdiv",
    "Zadar",
    "Split",
    "Hvar",
    "Dubrovnik",
    "Skopje",
    "Budva",
  ],
  "montenegro-balkan-roadtrip": [
    "Tirana",
    "Varna",
    "Sofia",
    "Plovdiv",
    "Zadar",
    "Split",
    "Hvar",
    "Dubrovnik",
    "Skopje",
    "Budva",
  ],
  "spain-eu-projects": [
    "Santander",
    "Pontevedra",
    "Tenerife",
    "Valladolid",
    "Zaragoza",
    "Santa Cruz de Tenerife",
    "Los Cristianos",
    "Barcelona",
    "Salamanca",
    "Oviedo",
    "Gijon",
    "Valencia",
    "Madrid",
    "Seville",
    "Agaete",
    "Las Palmas",
    "Huelva",
  ],
  "portugal-eu-projects": [
    "Lisbon",
    "Guimaraes",
    "Aveiro",
    "Braga",
    "Braganca",
    "Faro",
    "Porto",
    "Quarteira",
    "Ribeira de Pena",
    "Sines",
    "Viana do Castelo",
    "Figueira da Foz",
    "Peniche",
  ],
  "turkey-eu-projects": ["Istanbul", "Darica", "Kocaeli"],
  "bulgaria-eu-projects": ["Sofia", "Stara Zagora", "Plovdiv", "Varna"],
  "cyprus-eu-projects": ["Polis Chrysochous", "Paphos"],
  italy: [
    "Rome",
    "Bari",
    "Polignano a Mare",
    "Trani",
    "Alberobello",
    "Campomarino",
  ],
  malta: ["Valletta", "Mdina", "Gozo Island", "Comino Island"],
  netherlands: ["Tilburg", "Amsterdam", "Rotterdam"],
  belgium: ["Brussels", "Bruges"],
  austria: ["Vienna"],
  germany: ["Dresden"],
  morocco: ["Marrakesh"],
  greece: ["Athens"],
  serbia: ["Belgrade"],
  "united-arab-emirates": ["Abu Dhabi"],
};

const travelNarrativesBySlug: Record<string, string[]> = {
  "lisbon-portugal": [
    "My Portugal. I was born in Amadora, but a lot of the man I became was built outside the country. Still, wherever I go, Portugal comes with me. I am annoyingly ready with the classic 'Portugal is top 10 at this and that' argument, because honestly, I am proud of the good sides of where I come from.",
    "The history, the culture, the food, the light, the coast, the chaos, the sunsets, the little things that make no sense but somehow work. There is so much to love. It is a real shame that a country with this much potential has so often lacked people in power who truly saw what it could become and wanted the best for its people.",
    "But no matter how much I travel or how long I live outside, I will never stop being Portuguese, and I will never stop being happy about where I came from. If you are ever around, ask me for my Portuguese food guide or where to catch the best sunsets in Lisbon. I can also give private tours. Slightly biased ones, obviously.",
  ],
  "cluj-romania": [
    "Romania was a massive chapter for me. I moved there without knowing a single person, started working in a marketing company, and had to figure out real adult life abroad with my own money and no safety bubble around me.",
    "Cluj made that process easier. It is an amazing city, and Romania is still one of the most underrated countries I have experienced. I went there for work, but I came back with memories, independence, and the first real proof that I could build something outside Portugal.",
    "It also became the place where I joined my first startup journey properly. I arrived as an employee and left as a shareholder of Nordensa. Not bad for a country I barely knew before landing there.",
  ],
  "prague-czech-republic": [
    "Prague was the beginning of a lot of things: my first time living abroad, my first Erasmus, my first solo flight, and probably the first big confirmation that the world I had known for 18 years was too small for me.",
    "It was one of those experiences that quietly changes the way you see everything. I made friends who are still around today, studied in a different country, travelled on my own, and understood that staying inside the same bubble forever was never going to be enough.",
    "Prague is easily one of the best cities in Europe to live in and to visit. It was the city that started the traveller problem. I blame it, respectfully.",
  ],
  "valladolid-spain": [
    "Valladolid was Erasmus number two because the first one had been too good to leave it as a one-time thing. After Prague, Lisbon started to feel smaller. Not because Lisbon changed, but because I had changed. My head was already somewhere else, wanting more people, more places, more stories, and more of the world.",
    "At that time, another Erasmus was the most realistic way to keep travelling and keep exchanging experiences, so I took it. Living in Spain and studying in Spanish also gave me something practical: my Spanish got much better, fast.",
    "It may not have had the same first-time magic as Prague, but Valladolid was important because it proved that the urge to explore was not a phase. It was becoming part of me.",
  ],
  "seoul-south-korea": [
    "South Korea was a solo trip I had wanted to do since I was little. I always felt drawn to Asian culture, and Korea felt like the right first step into Asia.",
    "The funny thing is that I travelled alone, but I do not remember feeling lonely. I remember feeling unbelievably happy. I met people constantly, learned a lot about the country, and had that rare feeling of being exactly where I wanted to be.",
    "It was one of those trips that feels bigger than the number of days you spent there. Korea gave me curiosity, confidence, and a very strong warning that Asia was going to become a serious problem for my bank account.",
  ],
  "rio-brazil": [
    "I never expected Brazil to be my first South American country. I had always imagined Latin America pulling me in from somewhere else first, but the opportunity appeared, the group was great, and suddenly we were going to Carnival.",
    "And yes, Carnival really is one of the best parties in the world. The music, the dancing, the food, the energy, and the way people live the celebration hit differently. There is something familiar in Brazil because of the Portuguese connection, but then there is the Brazilian rhythm on top of it, and that changes everything.",
    "Brazil felt meaningful to me because it was close and far at the same time. Portuguese, but not Portugal. Familiar, but completely different. Loud, warm, chaotic, alive.",
  ],
  "budapest-hungary": [
    "Budapest is my favourite city in Europe. Simple as that. I have been there enough times to know it was not just a lucky first impression.",
    "What makes Budapest special is the balance. It works during the day and at night. It has quiet places and crowded places, local spots and international energy, culture and nightlife, beauty and mess, all somehow in the right amount. It is one of the few cities where I can imagine both travelling and living.",
    "I have also watched prices rise there over time, not always in a way that feels aligned with local salaries. Still, the city has something rare. Budapest does not try too hard. It just has it.",
  ],
  "chiang-mai-thailand": [
    "Writing a small paragraph about Thailand is almost impossible, so I will focus on the city that stole my heart and made me stop chasing the rest of Asia for a while: Chiang Mai.",
    "Chiang Mai is calm inside the chaos. It feels like a village and a city at the same time. It is vibrant, safe, social, affordable, and easy to live in. I had a great coworking space, a great house, people to meet everywhere, and the strange feeling that life did not need to be as complicated as we usually make it.",
    "I did not go to Thailand to find myself. I went with clear goals: test remote work in Asia, live differently for a while, and see if that lifestyle made sense for me. But after being there, I understand why people say Thailand changed them. It makes things feel possible.",
    "Part of that is the warmth of Thai people, probably the warmest national culture I have experienced. Part of it is also the type of people who end up there: travellers, remote workers, people on a break, people who chose freedom for a while. It is hard to see someone truly angry in Chiang Mai, unless they are leaving the next day.",
  ],
  "england-uk-roadtrip": [
    "London was my first solo trip, and that alone makes it special. I had read and watched so much about it growing up that going there felt like ticking off a childhood dream. It was one of the first times I remember thinking, 'I actually made this happen.'",
    "Almost a decade later, I returned to stay in Liverpool with a friend I had met in Thailand, and that trip opened a completely different side of the UK for me. I visited Wales and then roadtripped up to Edinburgh, which ended up being one of the biggest travel surprises I have had.",
    "Edinburgh is ridiculous in the best way. History, culture, science, architecture, atmosphere, all packed into one city. Easily in my top five. Huge recommend.",
  ],
  "wales-uk-roadtrip": [
    "London was my first solo trip, and that alone makes it special. I had read and watched so much about it growing up that going there felt like ticking off a childhood dream. It was one of the first times I remember thinking, 'I actually made this happen.'",
    "Almost a decade later, I returned to stay in Liverpool with a friend I had met in Thailand, and that trip opened a completely different side of the UK for me. I visited Wales and then roadtripped up to Edinburgh, which ended up being one of the biggest travel surprises I have had.",
    "Edinburgh is ridiculous in the best way. History, culture, science, architecture, atmosphere, all packed into one city. Easily in my top five. Huge recommend.",
  ],
  "scotland-uk-roadtrip": [
    "London was my first solo trip, and that alone makes it special. I had read and watched so much about it growing up that going there felt like ticking off a childhood dream. It was one of the first times I remember thinking, 'I actually made this happen.'",
    "Almost a decade later, I returned to stay in Liverpool with a friend I had met in Thailand, and that trip opened a completely different side of the UK for me. I visited Wales and then roadtripped up to Edinburgh, which ended up being one of the biggest travel surprises I have had.",
    "Edinburgh is ridiculous in the best way. History, culture, science, architecture, atmosphere, all packed into one city. Easily in my top five. Huge recommend.",
  ],
  "albania-balkan-roadtrip": [
    "The Balkans trip started in Bulgaria with three friends from Portugal who had come to visit me while I was living in Romania. We rented a car and started moving through different cities until Tirana.",
    "Tirana already had that feeling of a city about to become more famous. You could see things changing, and honestly, I liked it. It felt like a place preparing itself for the next chapter.",
    "After that, I continued alone through Montenegro to meet another friend in Dubrovnik, then roadtripped up the Croatian coast and stopped in Hvar for a few nights. It was one of those trips that had everything: friends, solo moments, messy routes, good coastlines, and enough randomness to make it memorable.",
  ],
  "bulgaria-balkan-roadtrip": [
    "The Balkans trip started in Bulgaria with three friends from Portugal who had come to visit me while I was living in Romania. We rented a car and started moving through different cities until Tirana.",
    "Tirana already had that feeling of a city about to become more famous. You could see things changing, and honestly, I liked it. It felt like a place preparing itself for the next chapter.",
    "After that, I continued alone through Montenegro to meet another friend in Dubrovnik, then roadtripped up the Croatian coast and stopped in Hvar for a few nights. It was one of those trips that had everything: friends, solo moments, messy routes, good coastlines, and enough randomness to make it memorable.",
  ],
  "croatia-balkan-roadtrip": [
    "The Balkans trip started in Bulgaria with three friends from Portugal who had come to visit me while I was living in Romania. We rented a car and started moving through different cities until Tirana.",
    "Tirana already had that feeling of a city about to become more famous. You could see things changing, and honestly, I liked it. It felt like a place preparing itself for the next chapter.",
    "After that, I continued alone through Montenegro to meet another friend in Dubrovnik, then roadtripped up the Croatian coast and stopped in Hvar for a few nights. It was one of those trips that had everything: friends, solo moments, messy routes, good coastlines, and enough randomness to make it memorable.",
  ],
  "north-macedonia-balkan-roadtrip": [
    "The Balkans trip started in Bulgaria with three friends from Portugal who had come to visit me while I was living in Romania. We rented a car and started moving through different cities until Tirana.",
    "Tirana already had that feeling of a city about to become more famous. You could see things changing, and honestly, I liked it. It felt like a place preparing itself for the next chapter.",
    "After that, I continued alone through Montenegro to meet another friend in Dubrovnik, then roadtripped up the Croatian coast and stopped in Hvar for a few nights. It was one of those trips that had everything: friends, solo moments, messy routes, good coastlines, and enough randomness to make it memorable.",
  ],
  "montenegro-balkan-roadtrip": [
    "The Balkans trip started in Bulgaria with three friends from Portugal who had come to visit me while I was living in Romania. We rented a car and started moving through different cities until Tirana.",
    "Tirana already had that feeling of a city about to become more famous. You could see things changing, and honestly, I liked it. It felt like a place preparing itself for the next chapter.",
    "After that, I continued alone through Montenegro to meet another friend in Dubrovnik, then roadtripped up the Croatian coast and stopped in Hvar for a few nights. It was one of those trips that had everything: friends, solo moments, messy routes, good coastlines, and enough randomness to make it memorable.",
  ],
  "turkey-eu-projects": [
    "I like Turkish culture, especially the feeling I get around Turkish people: that eagerness to fight for dreams, to move, to build, to make something happen. It is a very strong energy, and I respect that a lot.",
    "I loved things there that I thought I would not love. Like Edinburgh, Istanbul surprised me in a way that stayed. The project in Darica also brought me closer to Turkish customs and people in a more real way, not just as a tourist passing through. I ended up meeting some of the same people again in other projects, which made the connection even stronger.",
    "Turkey was a great surprise overall. Istanbul is hauntingly amazing. It is huge, intense, messy, beautiful, historic, loud, and somehow all of those things at the same time. So many cultures, mixes, people, layers, and numbers in one city. You need to want that intensity to enjoy it properly, and at that time, I did.",
  ],
  italy: [
    "Italy... oh my Italy. Some of my best memories are connected to Italian people, and that probably says a lot about why I like the country so much.",
    "I love their energy, their values, their relationship with food, family, beauty, and life in general. Italy expresses its culture better than almost anywhere else. You do not need to search too hard for character there. It is in the streets, the food, the conversations, the noise, the drama, the small details.",
    "I have been there on different trips, with different people, for different reasons, and it is always easy to say yes to Italy. Some countries need convincing. Italy does not.",
  ],
  malta: [
    "Malta was my first trip with my sister, and that will always make it special. Our first flight together, our first proper travel memory as siblings, and one of those trips that matters more because of who you shared it with than because of the destination itself.",
    "As a place, Malta is a very good vacation destination. Sea, history, sun, small distances, and enough to explore without needing a complicated plan. But I am very happy we went off season. I can imagine it becoming too crowded and too intense in peak summer.",
    "For me, Malta worked because it was simple, sunny, and personal.",
  ],
  netherlands: [
    "The Netherlands is a funny one for me. I am not a smoker, but somehow I still ended up in Amsterdam twice. Later, I also worked for a company in Tilburg, which gave me a more real view of the country beyond the tourist version.",
    "It is a well-structured country, and I respect that. Things work, rules are clear, systems make sense, and there is a practical efficiency that many countries could learn from.",
    "But emotionally? It did not fully grab me. While I was there, I often felt like people could use a little shaking. Great structure, low chaos, maybe a bit too little fire for my taste.",
  ],
  belgium: [
    "Belgium left me split. Bruges was a yes. Brussels was more of an 'uhh'.",
    "Maybe I expected too much from Brussels because I had always seen it as the capital of Europe. In my head, that title created a certain expectation, and the city did not really match it. Today, I do not see it that way at all.",
    "Bruges, though, has charm. So Belgium was not a disaster, but it also did not become a place I keep mentally booking return flights to.",
  ],
  austria: [
    "I only had time to visit Vienna, which is unfortunate because Austria clearly has more to offer. But Vienna alone was already worth it.",
    "The city is full of history, culture, and then more history on top of that. I loved the tours, the stories, the architecture, and the feeling that every corner had been involved in something important.",
    "I think Europe has the most appealing history in the world, and countries like Austria are a big reason for that. Vienna felt like a reminder that the continent is basically a giant museum where people also happen to live.",
  ],
  germany: [
    "Germany was never really calling for me. I lived with Germans twice, and I have to be honest: we are not always the most perfect match.",
    "I visited Dresden for what my friends said was the oldest Christmas market in Europe. Whether that claim survives a fact-check or not, the trip was nice, and I know Germany has a lot to offer in terms of history, cities, industry, and culture.",
    "Still, it is not high on my priority list right now. The country has substance, no doubt. But socially, it has not pulled me in yet. Maybe one day Germany and I will have our redemption arc. Not today.",
  ],
  morocco: [
    "Marrakesh did not impress me as much as I expected, at least not in a very positive way. I think some trips require you to prepare your mind for a completely different cultural rhythm, and on that trip I probably did not do that properly.",
    "I was lucky to be with good people and to meet good people, but parts of the experience were not inviting. The constant pressure around money, selling, phones, and especially the way some women were treated around us made it harder to enjoy the city.",
    "That said, Marrakesh is not Morocco as a whole, and my experience is not a final judgement on the country. With the right invitation and a better mindset, I would give Morocco another try.",
  ],
  greece: [
    "Greece is one of those countries where I feel at home. Like Italy and Spain, it has a warmth that makes sense to me.",
    "The friends I have there always make me feel welcome, and yes, they are very good at making sure I want to come back. Culture, history, food, sea, chaos, hospitality, it is the full package.",
    "I also cannot help thinking the country has even more potential than what it shows today. With the right hands, Greece could be even stronger. But even as it is, it already has something most countries would kill for: soul.",
  ],
  serbia: [
    "Serbia gave me a similar feeling to Marrakesh. It was not a full no, but it also was not a place that instantly made me want to book a return trip.",
    "Maybe I did not catch it at the right time, with the right people, or in the right mood. Some destinations need the right invitation, and Serbia feels like one of those for me.",
    "I would not close the door. I would just need a better reason to walk through it again.",
  ],
  "united-arab-emirates": [
    "I never thought Abu Dhabi would be my first Middle Eastern city. It happened because of a flight promotion, and honestly, without that deal I probably would not have gone at that time.",
    "The city is impressive in a very obvious way: tall buildings, visible wealth, clean structure, big roads, and a system that clearly works, but also works because a lot of very low-paid workers keep it running. Add the brutal heat, and it becomes a place I found interesting to visit, but not somewhere I would live.",
    "Still, I am glad I went. It was part of the trip, part of Vlogui was filmed there, and it gave me a first look into a region I had not explored before. Worth seeing, not worth romanticizing.",
  ],
};

const euProjectsByEntry: Record<string, string[]> = {
  "spain-eu-projects": [
    "Santander, Spain - MYTELA",
    "Polis Chrysochous, Cyprus - Unfiltered Confidence",
    "Pontevedra, Spain - UBUNTU",
    "Figueira da Foz, Portugal - Active democratic pathways",
    "Kocaeli, Turkey - Childrens rights and the climate crisis",
    "Sofia, Stara Zagora, Plovdiv and Varna, Bulgaria - EURO Library",
    "Tenerife, Spain - Healthy digital future",
    "Peniche, Portugal - Empowering youth with non violent communication",
  ],
  "portugal-eu-projects": [
    "Santander, Spain - MYTELA",
    "Polis Chrysochous, Cyprus - Unfiltered Confidence",
    "Pontevedra, Spain - UBUNTU",
    "Figueira da Foz, Portugal - Active democratic pathways",
    "Kocaeli, Turkey - Childrens rights and the climate crisis",
    "Sofia, Stara Zagora, Plovdiv and Varna, Bulgaria - EURO Library",
    "Tenerife, Spain - Healthy digital future",
    "Peniche, Portugal - Empowering youth with non violent communication",
  ],
  "turkey-eu-projects": [
    "Santander, Spain - MYTELA",
    "Polis Chrysochous, Cyprus - Unfiltered Confidence",
    "Pontevedra, Spain - UBUNTU",
    "Figueira da Foz, Portugal - Active democratic pathways",
    "Kocaeli, Turkey - Childrens rights and the climate crisis",
    "Sofia, Stara Zagora, Plovdiv and Varna, Bulgaria - EURO Library",
    "Tenerife, Spain - Healthy digital future",
    "Peniche, Portugal - Empowering youth with non violent communication",
  ],
  "cyprus-eu-projects": [
    "Santander, Spain - MYTELA",
    "Polis Chrysochous, Cyprus - Unfiltered Confidence",
    "Pontevedra, Spain - UBUNTU",
    "Figueira da Foz, Portugal - Active democratic pathways",
    "Kocaeli, Turkey - Childrens rights and the climate crisis",
    "Sofia, Stara Zagora, Plovdiv and Varna, Bulgaria - EURO Library",
    "Tenerife, Spain - Healthy digital future",
    "Peniche, Portugal - Empowering youth with non violent communication",
  ],
  "bulgaria-eu-projects": [
    "Santander, Spain - MYTELA",
    "Polis Chrysochous, Cyprus - Unfiltered Confidence",
    "Pontevedra, Spain - UBUNTU",
    "Figueira da Foz, Portugal - Active democratic pathways",
    "Kocaeli, Turkey - Childrens rights and the climate crisis",
    "Sofia, Stara Zagora, Plovdiv and Varna, Bulgaria - EURO Library",
    "Tenerife, Spain - Healthy digital future",
    "Peniche, Portugal - Empowering youth with non violent communication",
  ],
};

function getVisitedCities(entry: TravelEntry) {
  return visitedCitiesByEntry[entry.slug] ?? [];
}

function getTravelNarrative(entry: TravelEntry) {
  const curatedNarrative = travelNarrativesBySlug[entry.slug];

  if (curatedNarrative?.length) {
    return curatedNarrative;
  }

  return [entry.summary, ...entry.details].filter(Boolean);
}

function getEuProjects(entry: TravelEntry) {
  return euProjectsByEntry[entry.slug] ?? [];
}

function getTravelPageTitle(entry: TravelEntry) {
  return entry.group === "roadtrips" ? entry.title : entry.navLabel;
}

function getCanonicalTravelSlug(slug: string) {
  if (
    slug === "england-uk-roadtrip" ||
    slug === "wales-uk-roadtrip" ||
    slug === "scotland-uk-roadtrip"
  ) {
    return "england-uk-roadtrip";
  }

  if (
    slug === "albania-balkan-roadtrip" ||
    slug === "bulgaria-balkan-roadtrip" ||
    slug === "croatia-balkan-roadtrip" ||
    slug === "north-macedonia-balkan-roadtrip" ||
    slug === "montenegro-balkan-roadtrip"
  ) {
    return "albania-balkan-roadtrip";
  }

  return slug;
}

function getInitialSlideIndexForSelectedSlug(
  selectedSlug: string,
  slides: TravelEntry["previewSlides"],
) {
  const imageSlides = slides.filter((slide) => slide.imageSrc);

  if (!imageSlides.length) {
    return 0;
  }

  const preferredSlideTitleBySlug: Record<string, string> = {
    "england-uk-roadtrip": "England concept",
    "wales-uk-roadtrip": "Wales route stop",
    "scotland-uk-roadtrip": "Scotland route stop",
    "albania-balkan-roadtrip": "Albania concept",
    "bulgaria-balkan-roadtrip": "Bulgaria concept",
    "croatia-balkan-roadtrip": "Croatia concept",
    "north-macedonia-balkan-roadtrip": "North Macedonia concept",
    "montenegro-balkan-roadtrip": "Montenegro concept",
    "turkey-eu-projects": "Turkey concept",
    "cyprus-eu-projects": "Cyprus concept",
    "bulgaria-eu-projects": "Bulgaria concept",
    "spain-eu-projects": "Spain concept",
  };

  const preferredTitle = preferredSlideTitleBySlug[selectedSlug];

  if (!preferredTitle) {
    return 0;
  }

  const preferredIndex = imageSlides.findIndex(
    (slide) => slide.title === preferredTitle,
  );

  return preferredIndex >= 0 ? preferredIndex : 0;
}

export function TravelSelector({ groups }: TravelSelectorProps) {
  const orderedGroups = useMemo(
    () =>
      [...groups].sort((a, b) => {
        const aIndex = groupOrderMap.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
        const bIndex = groupOrderMap.get(b.slug) ?? Number.MAX_SAFE_INTEGER;

        return aIndex - bIndex || a.title.localeCompare(b.title);
      }),
    [groups],
  );

  const orderedEntries = useMemo(
    () => orderedGroups.flatMap((group) => group.items),
    [orderedGroups],
  );

  const [selectedSlug, setSelectedSlug] = useState(() =>
    getInitialSelectedSlug(orderedGroups),
  );

  const selectedEntry =
    orderedEntries.find(
      (entry) => entry.slug === getCanonicalTravelSlug(selectedSlug),
    ) ?? orderedEntries[0];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    setActiveSlideIndex(
      getInitialSlideIndexForSelectedSlug(
        selectedSlug,
        selectedEntry?.previewSlides ?? [],
      ),
    );
  }, [selectedEntry?.previewSlides, selectedSlug]);

  const imageSlides = selectedEntry?.previewSlides.filter((slide) => slide.imageSrc) ?? [];

  useEffect(() => {
    if (activeSlideIndex >= imageSlides.length) {
      setActiveSlideIndex(0);
    }
  }, [activeSlideIndex, imageSlides.length]);

  if (!selectedEntry) {
    return null;
  }

  const selectedTheme = getEntryTheme(selectedEntry);
  const hasGroupSlider =
    (selectedEntry.group === "roadtrips" || selectedEntry.group === "eu-projects") &&
    imageSlides.length > 1;
  const currentSlide = imageSlides[activeSlideIndex] ?? imageSlides[0];
  const visitedCities = getVisitedCities(selectedEntry);
  const textLines = getTravelNarrative(selectedEntry);
  const euProjects = getEuProjects(selectedEntry);

  const renderSelectorItem = (entry: TravelEntry) => {
    const theme = getEntryTheme(entry);
    const isActive =
      getCanonicalTravelSlug(entry.slug) ===
      getCanonicalTravelSlug(selectedEntry.slug);

    return (
      <div
        key={entry.slug}
        className="group relative flex shrink-0 justify-center"
      >
        <button
          type="button"
          onClick={() => {
            startTransition(() => setSelectedSlug(entry.slug));
          }}
          className={cn(
            "flex items-center justify-center rounded-[18px] p-1.5 transition duration-300 sm:p-2",
            isActive
              ? "bg-white shadow-[0_10px_24px_rgba(15,23,42,0.08)]"
              : "hover:-translate-y-0.5",
          )}
          aria-pressed={isActive}
          aria-label={entry.hoverLabel}
          title={entry.hoverLabel}
        >
          <div
            className={cn(
              "relative flex h-[40px] w-[40px] items-center justify-center overflow-hidden rounded-[14px] border text-[1.35rem] transition sm:h-[44px] sm:w-[44px] sm:text-[1.5rem]",
              theme.iconTone,
              isActive
                ? cn("scale-[1.03]", theme.iconActive)
                : "border-line/65 group-hover:scale-[1.02] group-hover:border-accent/20",
            )}
          >
            <span className="leading-none">{entry.flag}</span>
          </div>
        </button>
        <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-1.5 -translate-x-1/2 whitespace-nowrap text-[11px] font-medium tracking-[0.01em] text-muted opacity-0 transition-all duration-200 group-hover:translate-y-0.5 group-hover:opacity-100 group-focus-within:translate-y-0.5 group-focus-within:opacity-100">
          {entry.hoverLabel}
        </span>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div className="relative z-20 -mx-1 max-w-full overflow-x-auto px-1 pb-1 md:overflow-visible">
        <div className="flex w-max min-w-full items-start gap-6 sm:gap-8 md:w-full md:flex-wrap md:gap-x-6 md:gap-y-6 lg:gap-x-7">
          {orderedGroups.map((group) => (
            <div
              key={group.slug}
              className="min-w-fit md:flex-[0_0_auto] md:max-w-full"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted/72 sm:text-[10.5px]">
                  {group.title}
                </p>
              </div>

              {group.slug === "roadtrips" ? (
                <div className="mt-2.5 flex flex-wrap items-center gap-1.5 md:gap-2">
                  <div className="-space-x-1 flex items-center sm:-space-x-1.5">
                    {group.items
                      .filter((entry) =>
                        ["england-uk-roadtrip", "wales-uk-roadtrip", "scotland-uk-roadtrip"].includes(entry.slug),
                      )
                      .map(renderSelectorItem)}
                  </div>
                  <div className="-space-x-1 flex items-center sm:-space-x-1.5">
                    {group.items
                      .filter((entry) =>
                        [
                          "albania-balkan-roadtrip",
                          "bulgaria-balkan-roadtrip",
                          "croatia-balkan-roadtrip",
                          "north-macedonia-balkan-roadtrip",
                          "montenegro-balkan-roadtrip",
                        ].includes(entry.slug),
                      )
                      .map(renderSelectorItem)}
                  </div>
                </div>
              ) : (
                <div className="mt-2.5 flex items-center gap-2 sm:gap-2.5 md:gap-1.5 lg:gap-2 md:flex-wrap">
                  {group.items.map(renderSelectorItem)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <section
        className={cn(
          "relative z-0 rounded-[34px] border p-4 shadow-card sm:p-6",
          selectedTheme.panel,
        )}
      >
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(340px,0.78fr)] xl:items-start">
          <div className="flex min-w-0 flex-col">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full bg-accent-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-deep">
                {getGroupLabel(selectedEntry)}
              </span>
              <span className="text-[11px] font-medium tracking-[0.01em] text-muted">
                Check more on my travel blog:
              </span>
              <a
                href="https://www.instagram.com/guilhermejsf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line/75 bg-white/76 px-3 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white"
              >
                <span className="relative h-4 w-4 overflow-hidden rounded-[5px]">
                  <Image
                    src={instagramIcon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </span>
                <span>Instagram</span>
              </a>
            </div>

            <div className="mt-5">
              <h2 className="font-display text-[2.7rem] leading-[0.98] tracking-tight text-ink sm:text-[3.4rem]">
                {getTravelPageTitle(selectedEntry)}
              </h2>
            </div>

            <div className="mt-3 border-t border-black/6 pt-3">
              {selectedEntry.group === "eu-projects" && euProjects.length ? (
                <div className="border-b border-black/6 pb-3 pt-1">
                  <div className="space-y-0 border-b border-black/6 pb-3">
                    <div className="py-3 text-sm leading-7 text-ink/82 sm:text-[0.96rem]">
                      <span>EU projects shaped a big part of who I became.</span>
                    </div>
                    <div className="border-b border-black/6 py-3 text-sm leading-7 text-ink/82 sm:text-[0.96rem]">
                      <span>
                        I worked on important topics, met people from completely different backgrounds, and found a different sense of community that I did not really have before. Those projects made me very good at public speaking, leadership, teaching, listening, adapting, and learning from everyone around me.
                      </span>
                    </div>
                    <div className="py-3 text-sm leading-7 text-ink/82 sm:text-[0.96rem]">
                      <span>
                        More than just good experiences, they became an important part of my path. They helped me grow my career, expand my network, and, most importantly, become a more open, confident and ultimately more human.
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-deep">
                    List of the projects I've participated in
                  </p>
                  <div className="mt-3 space-y-0">
                    {euProjects.map((project) => (
                      <div
                        key={`${selectedEntry.slug}-${project}`}
                        className="border-b border-black/6 py-3 text-sm leading-7 text-ink/82 last:border-b-0 sm:text-[0.96rem]"
                      >
                        <span>{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-4 space-y-0">
                {textLines.map((line, index) => (
                  <div
                    key={`${selectedEntry.slug}-note-${index}`}
                    className="border-b border-black/6 py-3 text-sm leading-7 text-ink/82 sm:text-[0.96rem]"
                  >
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-deep">
                Cities Visited
              </p>
              {visitedCities.length ? (
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {visitedCities.map((city) => (
                    <span
                      key={city}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm text-ink",
                        selectedTheme.surface,
                      )}
                    >
                      {city}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-sm leading-7 text-muted/65 sm:text-[0.96rem]">
                  Add city names here.
                </p>
              )}
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-4 xl:items-end xl:pt-4">
            {currentSlide?.imageSrc ? (
              <div className="flex w-full max-w-[30rem] flex-col items-center gap-3 xl:items-end">
                <div className="relative flex justify-center overflow-hidden rounded-[26px] xl:justify-end">
                  {hasGroupSlider ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveSlideIndex((index) =>
                            index === 0 ? imageSlides.length - 1 : index - 1,
                          )
                        }
                        className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/55 bg-black/42 text-[1.65rem] font-semibold text-white shadow-[0_16px_36px_rgba(0,0,0,0.28)] backdrop-blur-sm transition hover:scale-[1.04] hover:bg-black/56"
                        aria-label="Previous travel image"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveSlideIndex((index) =>
                            index === imageSlides.length - 1 ? 0 : index + 1,
                          )
                        }
                        className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/55 bg-black/42 text-[1.65rem] font-semibold text-white shadow-[0_16px_36px_rgba(0,0,0,0.28)] backdrop-blur-sm transition hover:scale-[1.04] hover:bg-black/56"
                        aria-label="Next travel image"
                      >
                        ›
                      </button>
                    </>
                  ) : null}

                  <Image
                    src={currentSlide.imageSrc}
                    alt={currentSlide.imageAlt ?? currentSlide.title}
                    width={900}
                    height={1200}
                    sizes="(max-width: 1280px) 38vw, 32vw"
                    className="h-auto w-auto max-h-[34rem] rounded-[26px] object-contain"
                  />

                  {hasGroupSlider ? (
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/28 via-black/6 to-transparent px-4 pb-4 pt-12">
                      <div className="flex items-center gap-2">
                        {imageSlides.map((slide, index) => (
                          <button
                            key={`${selectedEntry.slug}-${slide.title}-${index}`}
                            type="button"
                            onClick={() => setActiveSlideIndex(index)}
                            className={cn(
                              "h-2 rounded-full transition-all duration-300",
                              index === activeSlideIndex
                                ? "w-8 bg-white"
                                : "w-2 bg-white/55",
                            )}
                            aria-label={`Show ${slide.title}`}
                            aria-pressed={index === activeSlideIndex}
                            title={slide.title}
                          >
                            <span className="sr-only">{slide.title}</span>
                          </button>
                        ))}
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/88">
                        {String(activeSlideIndex + 1).padStart(2, "0")} /{" "}
                        {String(imageSlides.length).padStart(2, "0")}
                      </span>
                    </div>
                  ) : null}
                </div>

              </div>
            ) : (
              <div
                className={cn(
                  "grid items-center gap-2.5 rounded-[26px] border px-3 py-2.5 sm:grid-cols-[120px_minmax(0,1fr)] sm:px-3.5 sm:py-3",
                  selectedTheme.surface,
                )}
              >
                <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden rounded-[20px] border border-line/70 bg-white/86 text-[3rem] sm:aspect-square sm:text-[3.4rem]">
                  <span className="leading-none">{selectedEntry.flag}</span>
                </div>
                <div className="flex min-w-0 flex-col items-end gap-2">
                  <p className="max-w-[18rem] text-right text-sm leading-6 text-muted">
                    {selectedEntry.meta}
                  </p>
                  <p className="text-right text-sm font-semibold text-ink">
                    {selectedEntry.subtitle}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
