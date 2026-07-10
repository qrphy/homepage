# Personal AI Workflow — Design Options

Three ways to present the AI workflow. **Option A is currently live.**
Kaynak prototip: `/Users/furkan/brain/projects/portfolio/ai-workflow-frontend-prototype.tsx`

---

## Option A — Separate route (ŞU AN AKTİF)

Prototip `src/app/ai-workflow/page.tsx` olarak, tasarlandığı genişlikte.
Ana sayfada sade rail diyagramı + `see the full system ↗` linki.

- Ana sayfa: `max-w-lg`, gri + tek amber aksan, sakin
- Route: `max-w-6xl`, violet/emerald/amber, glow + mesh + grid
- İki bağlam, iki ayrı görsel yoğunluk — biri diğerini ezmiyor

**Neden seçildi:** Koordinat grafiği (`x: 17`–`x: 84`, 64px daireler,
192px tooltip'ler) nefes almak için 1024px+ ister. 512px'lik kolonda
düğümler çakışır, mesh çizgileri yapışır, "ağ" hissi kaybolur.

**Ödün:** Orijinal task list "ayrı route açma"yı kapsam dışı sayıyordu.
Prototip o karardan sonra geldiği için geçersiz kabul edildi.

---

## Option B — Tek sayfa, sessiz sürüm

Route yok. Ana sayfadaki mevcut rail diyagramı kalır.
Prototipin **panelleri** eklenir (ikisi de dikey liste, dar kolonda çalışır):

- `System Loops` — Build Feature / Write Article / Debug Issue zincirleri
- `Skill Matrix` — 10 skill, `grid-cols-2` terminal chip'leri

Koordinat grafiği **alınmaz**. Palet gri + tek amber kalır.

**Kazanç:** Task list'e birebir uyar. Site tek parça kalır.
**Kayıp:** Prototipin en akılda kalıcı kısmı (mesh grafiği) hiç görünmez.

Uygulama: `aiWorkflowExamples` + `aiSkills` dizileri `page.tsx`'e eklenir,
mevcut `<ol>` diyagramının altına iki blok olarak render edilir.

---

## Option C — Ana sayfada full-width breakout

Tek sayfa, ama AI Workflow bölümü `max-w-lg` kolonundan taşıp
tam genişliğe açılır. Grafik + sidebar prototipe yakın render olur.

**Kazanç:** Grafik görünür, ayrı route yok.
**Kayıp:** 512px'lik dar bir sayfanın ortasında 1200px'lik parlayan bir
blok açılır — sayfayı görsel olarak ikiye böler. Task list'in
"bu bölüm portfolyonun geri kalanını ezmemeli" kuralına aykırı.

Uygulama: bölüme `relative left-1/2 -translate-x-1/2 w-screen` benzeri
bir breakout sarmalayıcı; iç içe `max-w-6xl`.

---

## Palet notu

Ana sayfa ve route farklı yoğunlukta olabilir — ayrı sayfalar, ayrı kimlik.
**Aynı** sayfada iki palet olamaz. Option B veya C'ye geçilirse prototipin
violet/emerald'ı bırakılıp tek amber aksanda kalınmalı.
