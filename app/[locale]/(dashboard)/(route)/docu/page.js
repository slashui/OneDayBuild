import React from 'react'

const docu = () => {
  return (
    <main class="relative flex justify-center mx-auto max-w-8xl sm:px-2 lg:px-8 xl:px-12 w-full">


    <div class="fixed top-[3.5rem] h-screen shadow-xl px-4 left-0 hidden peer-checked:block lg:relative lg:top-0 lg:h-auto lg:px-0 lg:block lg:flex-none lg:shadow-none">
      <div class="absolute inset-y-0 right-0 w-full lg:w-[50vw] bg-white lg:bg-slate-50 dark:bg-black"></div>

      <nav class="sticky top-[4.5rem] w-64 pr-8 text-base lg:text-sm xl:w-72 xl:pr-16">
        <ul role="list" class="-ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-7 pl-0.5 space-y-8">
          <li>
            <h3 class="font-semibold tracking-tight text-slate-900 dark:text-zinc-500">
              Getting started
            </h3>

            <ul role="list" class="pl-3 mt-3 space-y-2">
              <li>
                <a href="#" class="text-slate-900  hover:text-slate-800 dark:text-zinc-300 dark:hover:text-zinc-100">
                  Quick start guide
                </a>
              </li>

              <li>
                <a href="#" class="text-slate-600 hover:text-slate-800 dark:text-zinc-300 dark:hover:text-zinc-100">
                  How does Spinal work?
                </a>
              </li>
            </ul>
          </li>

          <li>
            <h3 class="font-semibold tracking-tight text-slate-900 dark:text-zinc-500">
              Content Types
            </h3>

            <ul role="list" class="pl-3 mt-3 space-y-2">
              <li>
                <a href="#" class="text-slate-600 hover:text-slate-800 dark:text-zinc-300 dark:hover:text-zinc-100">
                  What are content types?
                </a>
              </li>

              <li>
                <a href="#" class="text-slate-600 hover:text-slate-800 dark:text-zinc-300 dark:hover:text-zinc-100">
                  Create and edit content types
                </a>
              </li>
            </ul>
          </li>

          <li>
            <h3 class="font-semibold tracking-tight text-slate-900 dark:text-zinc-500">
              Content
            </h3>

            <ul role="list" class="pl-3 mt-3 space-y-2">
              <li>
                <a href="#" class="text-slate-600 hover:text-slate-800 dark:text-zinc-300 dark:hover:text-zinc-100">
                  What kind of content can I create and edit?
                </a>
              </li>

              <li>
                <a href="#" class="text-slate-600 hover:text-slate-800 dark:text-zinc-300 dark:hover:text-zinc-100">
                  Previewing content
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>

    <div class="flex-auto bg-white dark:bg-black border-l dark:border-zinc-900 max-w-3xl min-w-0 px-4 py-10 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
      <article class="">
        <header class="">
          <p class="text-base font-medium text-slate-500 dark:text-zinc-500">
            Getting started
          </p>

          <h1 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-200">
            Quick start guide
          </h1>
        </header>

        <p class="mt-2 text-xl text-slate-600 dark:text-zinc-400">
          Need to get started quickly with Spinal? You will learn all the basics in just minutes.
        </p>

        <a href="#" class="flex flex-col w-full mt-4 overflow-hidden rounded-lg shadow-xl md:flex-row md:w-4/5">
          <div class="flex items-center justify-center w-full px-4 py-16 text-sm font-normal md:w-1/3 text-slate-900/20  bg-primary ">
            [Screenshot Image]
          </div>

          <div class="w-full px-6 py-4 border-t border-b border-r md:w-2/3 border-slate-200 dark:border-primary">
            <h3 class="text-xl font-semibold tracking-tight text-slate-900 dark:text-zinc-200">
              Video walkthrough
            </h3>

            <p class="mt-1 text-lg text-slate-600 dark:text-zinc-400">
              Watch this 5 minutes video-walkthrough of Spinal. You quickly learn how to set up your dashboard, invite team members, set permissions and how to schedule and publish content.
            </p>
          </div>
        </a>

        <h3 class="mt-16 text-base font-bold tracking-tight text-slate-900 dark:text-zinc-500">
          Get set up quickly
        </h3>

        <ul class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <li>
            <a href="#" class="block px-6 py-4 border-l rounded bg-slate-50 hover:dark:border-primary hover:bg-white dark:bg-zinc-900 hover:dark:bg-zinc-800 dark:border-zinc-900">
              <h4 class="font-bold tracking-tight text-slate-900 dark:text-zinc-200">
                Connect your GitHub account
              </h4>

              <p class="text-slate-600 dark:text-zinc-500">
                What you need to know before connecting your GitHub account
              </p>
            </a>
          </li>
          <li>
            <a href="#" class="block px-6 py-4 border-l rounded bg-slate-50  hover:dark:border-primary  hover:bg-white dark:bg-zinc-900 hover:dark:bg-zinc-800 dark:border-zinc-900">
              <h4 class="font-bold tracking-tight text-slate-900 dark:text-zinc-200">
              Add your first content type
              </h4>

              <p class="text-slate-600 dark:text-zinc-500">
              Learn what content types are in Spinal
              </p>
            </a>
          </li>
          <li>
            <a href="#" class="block px-6 py-4 border-l rounded bg-slate-50  hover:dark:border-primary  hover:bg-white dark:bg-zinc-900 hover:dark:bg-zinc-800 dark:border-zinc-900">
              <h4 class="font-bold tracking-tight text-slate-900 dark:text-zinc-200">
              Invite your first team member
              </h4>

              <p class="text-slate-600 dark:text-zinc-500">
              You write your best marketing content with your team
              </p>
            </a>
          </li>
          <li>
            <a href="#" class="block px-6 py-4 border-l rounded bg-slate-50 hover:dark:border-primary  hover:bg-white dark:bg-zinc-900 hover:dark:bg-zinc-800 dark:border-zinc-900">
              <h4 class="font-bold tracking-tight text-slate-900 dark:text-zinc-200">
              Publish your content
              </h4>

              <p class="text-slate-600 dark:text-zinc-500">
              Publishing with Spinal is really just one click of a button
              </p>
            </a>
          </li>
          

        </ul>

        <h3 class="mt-8 text-base font-bold tracking-tight text-slate-900 dark:text-zinc-500">
          Have questions?
        </h3>

        <p class="text-slate-900 dark:text-zinc-200">
          Still have questions? <a href="mailto:support@spinalcms.com" class="underline hover:no-underline">Talk to support</a>.
        </p>
      </article>

      <dl class="flex pt-6 mt-6 border-t border-slate-200 dark:border-zinc-900">
        {/* <!-- <div class="mr-auto text-left"> -->
        <!--   <dt class="text-sm font-normal tracking-tight text-slate-600"> -->
        <!--     Previous -->
        <!--   </dt> -->

        <!--   <dd class="mt-1"> -->
        <!--     <a href="#" class="text-base font-semibold text-slate-900 hover:underline"> -->
        <!--       Blah -->
        <!--     </a> -->
        <!--   </dd> -->
        <!-- </div> --> */}

        <div class="ml-auto text-right">
          <dt class="text-sm font-normal tracking-tight text-slate-600  dark:text-zinc-200">
            Next
          </dt>

          <dd class="mt-1">
            <a href="#" class="text-base font-semibold text-slate-900  dark:text-zinc-400 hover:underline">
              How does Spinal work?
            </a>
          </dd>
        </div>
      </dl>
    </div>
  </main>
  )
}

export default docu