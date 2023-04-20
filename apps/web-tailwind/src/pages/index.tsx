import Head from 'next/head'
import { Button, Card, Drawer } from 'ui-tailwind'
import { Switch } from '@headlessui/react'
import { useState } from 'react'

const CARD_CONTENT = [
    {
        title: 'Caching Tasks',
        href: 'https://turbo.build/repo/docs/core-concepts/caching',
        cta: 'Read More',
    },
    {
        title: 'Running Tasks',
        href: 'https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks',
        cta: 'Read More',
    },
    {
        title: 'Configuration Options',
        href: 'https://turbo.build/repo/docs/reference/configuration',
        cta: 'Read More',
    },
]

export default function Home() {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex items-center justify-center ">
            <Drawer open={open} />
            <div className="flex min-h-screen flex-col items-center justify-center py-2 ">
                <Switch
                    checked={open}
                    onChange={setOpen}
                    className={`${open ? 'bg-teal-900' : 'bg-teal-700'}
                    inline-flex
                    h-[38px]
                    w-[74px]
                    shrink-0
                    cursor-pointer
                    rounded-full
                    border-2
                    border-transparent
                    transition-colors
                    duration-200
                    ease-in-out
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-white
                    focus-visible:ring-opacity-75`}
                >
                    <span className="sr-only">open</span>
                    <span
                        aria-hidden="true"
                        className={`${open ? 'translate-x-9' : 'translate-x-0'}
                        pointer-events-none
                        inline-block
                        h-[34px]
                        w-[34px]
                        transform
                        rounded-full
                        bg-white
                        shadow-lg
                        ring-0
                        transition
                        duration-200
                        ease-in-out`}
                    />
                </Switch>
                <Head>
                    <title>Web - Turborepo Example</title>
                </Head>

                <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8 flex-grow">
                    <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
                        Web
                        <span className="block bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent px-2">
                            Turborepo Example
                        </span>
                    </h1>
                    <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
                        <Button />
                    </div>

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 place-content-evenly">
                        {CARD_CONTENT.map((card) => (
                            <Card key={card.title} {...card} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}
