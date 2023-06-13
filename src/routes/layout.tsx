import { component$, Slot, useSignal, $ } from '@builder.io/qwik';
import {
  HiArrowLongLeftOutline,
  HiBars3Outline
} from '@qwikest/icons/heroicons';
import Menu from '~/components/starter/Menu/menu';
import { HiArrowLongRightOutline } from '@qwikest/icons/heroicons';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$, useLocation, useNavigate } from '@builder.io/qwik-city';
import routes from '../routes';
import bgHeader from '../assets/images/header-bg.jpg';

export const usePathName = routeLoader$((req) => {
  if (req.url.pathname === '/') {
    return '';
  }
  const name = req.url.pathname.replaceAll('/', '').split('q-data')[0];
  return name.charAt(0).toUpperCase() + name.slice(1);
});

export default component$(() => {
  const navigate = useNavigate();
  const isMenuOpen = useSignal<boolean>(false);
  const location = useLocation();
  const animationDirection = useSignal<
    'left' | 'right' | 'middle' | 'none' | 'out-right' | 'out-left'
  >('middle');
  const positionInRoutes = routes.findIndex(
    (e) => e.path === location.url.pathname
  );
  const wrapperClassName =
    animationDirection.value === 'out-left'
      ? 'slide-out-left'
      : animationDirection.value === 'out-right'
      ? 'slide-out-right'
      : animationDirection.value === 'left'
      ? 'slide-left-full'
      : animationDirection.value === 'right'
      ? 'slide-right-full'
      : animationDirection.value === 'middle'
      ? 'fade-in'
      : '';
  return (
    <>
      <Menu
        open={isMenuOpen.value}
        handler={$(() => {
          isMenuOpen.value = false;
        })}
      />
      {routes.length > positionInRoutes + 1 && (
        <button
          aria-label="Next page"
          class="fixed z-20 top-1/2 -translate-y-1/2 right-8 flex items-center justify-center"
          onClick$={() => {
            animationDirection.value = 'out-left';
            setTimeout(() => {
              animationDirection.value = 'left';
              navigate(routes[positionInRoutes + 1].path);
            }, 400);
          }}
        >
          <HiArrowLongRightOutline class="h-10 w-10 md:h-16 md:w-16 lg:h-20 lg:w-20 shadow-xl text-gray-400 hover:text-gray-100 transition-all" />
        </button>
      )}
      {positionInRoutes > 0 && (
        <button
          aria-label="Previous page"
          class="fixed z-20 top-1/2 -translate-y-1/2 left-8 flex items-center justify-center"
          onClick$={() => {
            animationDirection.value = 'out-right';
            setTimeout(() => {
              animationDirection.value = 'right';
              navigate(routes[positionInRoutes - 1].path);
            }, 400);
          }}
        >
          <HiArrowLongLeftOutline class="h-20 w-20 shadow-xl text-gray-400 hover:text-gray-100 transition-all" />
        </button>
      )}
      {!isMenuOpen.value && (
        <button
          class="absolute z-20 right-12 top-8 flex items-center justify-center bg-slate-300 bg-opacity-20 rounded-full p-2 hover:bg-opacity-30 shadow-xl transition-all"
          onClick$={() => {
            isMenuOpen.value = !isMenuOpen.value;
          }}
        >
          <HiBars3Outline class="w-12 h-12 text-white" />
        </button>
      )}

      <div
        class="font-sans overflow-hidden"
        style={{
          filter: isMenuOpen.value ? 'blur(5px)' : 'none',
          transition: 'filter 0.5s ease-in-out'
        }}
      >
        <div
          class="relative w-screen h-screen flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${bgHeader})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundBlendMode: 'luminosity',
            backgroundColor: 'rgba(150,150,150,0.1)'
          }}
        >
          <div id="layout-wrapper" class={wrapperClassName}>
            <Slot />
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const pathName = resolveValue(usePathName);

  return {
    title: pathName ? `Skander Tebourbi - ${pathName}` : 'Skander Tebourbi',
    meta: [
      {
        name: 'description',
        content: "Skander Tebourbi's personal website"
      },
      {
        name: 'keywords',
        content:
          'Skander Tebourbi, Skander, Tebourbi, Skander Tebourbi personal website, Skander Tebourbi website, Skander Tebourbi portfolio, Skander Tebourbi projects, Skander Tebourbi blog, Skander Tebourbi about, Skander Tebourbi contact, Skander Tebourbi resume, Skander Tebourbi cv, Skander Tebourbi linkedin, Skander Tebourbi github, Skander Tebourbi twitter, Skander Tebourbi instagram, Skander Tebourbi facebook, Skander Tebourbi youtube, Skander Tebourbi twitch, Skander Tebourbi discord, Skander Tebourbi email, Skander Tebourbi phone, Skander Tebourbi address, Skander Tebourbi location, Skander Tebourbi country, Skander Tebourbi city, Skander Tebourbi state, Skander Tebourbi province, Skander Tebourbi zip code, Skander Tebourbi postal code, Skander Tebourbi street, Skander Tebourbi house, Skander Tebourbi apartment, Skander Tebourbi building, Skander Tebourbi room, Skander Tebourbi office, Skander Tebourbi company, Skander Tebourbi organization, Skander Tebourbi institution, Skander Tebourbi school, Skander Tebourbi university, Skander Tebourbi college, Skander Tebourbi high school, Skander Tebourbi middle school, Skander Tebourbi elementary school, Skander Tebourbi primary school, Skander Tebourbi secondary school'
      },
      {
        name: 'author',
        content: 'Skander Tebourbi'
      },
      {
        name: 'og:title',
        content: 'Skander Tebourbi'
      },
      {
        name: 'og:description',
        content: "Skander Tebourbi's personal website"
      },
      {
        name: 'og:image',
        content: ''
      },
      {
        name: 'og:url',
        content: 'https://skandertebo.codes'
      }
    ],
    links: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png'
      }
    ]
  };
};
