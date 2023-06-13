import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="flex flex-col gap-4 p-12 shadow-2xl rounded-lg bg-gray-800 bg-opacity-40 mx-auto w-[85vw] md:w-[70vw]">
      <header class="text-5xl font-bold text-white mb-12">Socials:</header>
      <main>
        <div class="flex flex-col gap-8">
          <div class="flex">
            <a
              href="mailto:alexandertebourb@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              class="flex flex-row gap-4 items-center text-white hover:text-cyan-700 transition-colors"
            >
              <i class="fa-solid fa-envelope fa-2xl"></i>
              <span class="text-lg">alexandertebourb@gmail.com</span>
            </a>
          </div>
          <div class="flex flex-row gap-4">
            <a
              href="https://github.com/skandertebo"
              target="_blank"
              rel="noopener noreferrer"
              class="flex flex-row gap-2 items-center text-white hover:text-slate-200 transition-all"
            >
              <i class="fa-brands fa-github fa-2xl hover:text-cyan-900 transition-colors"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/skander-tebourbi-a8152b222/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex flex-row gap-2 items-center text-white hover:text-slate-200 transition-all"
            >
              <i class="fa-brands fa-linkedin fa-2xl hover:text-cyan-900 transition-colors"></i>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
});
