/* eslint-disable @next/next/no-img-element */
/* @next/next/no-html-link-for-pages*/

import Header from '../components/common/Header';
import HomeBanner from '../components/home/HomeBanner';
import ServiceCard from '../components/home/ServiceCard';
import Footer2 from '../components/common/Footer2';
import CustomHead from '../components/common/CustomHead'; // Importa el componente CustomHead

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    xUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]

const stats = [
  { id: 1, name: 'Creators on the platform', value: '8,000+' },
  { id: 2, name: 'Flat platform fee', value: '3%' },
  { id: 3, name: 'Uptime guarantee', value: '99.9%' },
  { id: 4, name: 'Paid out to creators', value: '$70M' },
]
const Home = () => {
  return ( 

  
  <div className="bg-white">


  <CustomHead />
      <Header /> 

      <div className=" bg-gradient-to-r from-slate-100 to-slate-200 px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Dale Dopamina Visual
        <br />
        a tu negocio
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
      Diseñamos estrategias y soluciones visuales para emprendedores
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
         Agenda una cita
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Ver video demo <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </div>




      <div className="relative bg-white">
      <img
        className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
        alt=""
      />
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <h2 className="text-base font-semibold leading-8 text-indigo-600">Our track record</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by thousands of creators&nbsp;worldwide
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
              dolor cupiditate blanditiis ratione.
            </p>
            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                  <dt className="text-sm leading-6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>


    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white">Trusted by the most innovative teams</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
              scelerisque amet ullamcorper eu enim et fermentum, augue.
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Create account
              </a>
              <a href="#" className="text-sm font-semibold text-white">
                Contact us <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            <img
              className="max-h-12 w-full object-contain object-left"
              src="https://tailwindui.com/img/logos/tuple-logo-white.svg"
              alt="Tuple"
              width={105}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-left"
              src="https://tailwindui.com/img/logos/reform-logo-white.svg"
              alt="Reform"
              width={104}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-left"
              src="https://tailwindui.com/img/logos/savvycal-logo-white.svg"
              alt="SavvyCal"
              width={140}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-left"
              src="https://tailwindui.com/img/logos/laravel-logo-white.svg"
              alt="Laravel"
              width={136}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-left"
              src="https://tailwindui.com/img/logos/transistor-logo-white.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-left"
              src="https://tailwindui.com/img/logos/statamic-logo-white.svg"
              alt="Statamic"
              width={147}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>


    <div className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl xl:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About the team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
              <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a href={person.xUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">X</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>


 

  <Footer2 />


</div>
)
}

      



export default Home;
