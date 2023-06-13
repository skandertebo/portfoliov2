import type { NoSerialize } from '@builder.io/qwik';
import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import menuRoutes from '~/routes';

export default component$(
  ({ handler, open }: { handler: NoSerialize<() => void>; open: boolean }) => {
    useVisibleTask$(() => {
      window.addEventListener('click', (e) => {
        if (
          e.target instanceof HTMLElement &&
          !(e.target.id === 'menu') &&
          document.getElementById('menu')?.contains(e.target) === false
        ) {
          handler?.();
        }
      });
    });
    const navigate = useNavigate();

    if (!open) {
      return null;
    }

    return (
      <div
        id="menu"
        class="fixed right-0 top-0 h-screen bg-black bg-opacity-50 shadow-xl py-12 z-30 flex flex-col gap-4 text-white"
      >
        {menuRoutes.map((route, idx) => {
          const path = route.path;
          return (
            <div
              class="w-full hover:bg-slate-400 hover:bg-opacity-40 transition-all"
              key={idx}
            >
              <button
                aria-label="Menu"
                onClick$={() => {
                  navigate(path);
                }}
                class="px-16 py-4 flex items-center space-x-4 text-2xl font-bold"
              >
                <route.icon class="w-8 h-8" />
                <span>{route.name}</span>
              </button>
            </div>
          );
        })}
      </div>
    );
  }
);
