import * as React from 'react'

export interface DrawerProps {
    open?: boolean
}

export const Drawer = ({ open = true }: DrawerProps) => {
    return (
        <div
            className={`${open ? 'ui-w-1/4' : 'ui-w-0 ui-h-0 ui-m-0 ui-p-0'}
                    ui-h-screen
                    ui-shrink-0
                    ui-bg-gradient-to-r 
                    ui-from-cyan-500 
                    ui-to-blue-500
                    ui-p-2
                    ui-rounded
                    ui-duration-200
                    ui-ease-in-out
                    ui-transition-all 
                    ui-delay-150 
                    ui-overflow-hidden 
                  
                `}
        >
            <div className="ui-pt-8 ui-text-base ui-font-semibold lui-eading-7">
                <p className="ui-text-gray-900">
                    Want to dig deeper into Tailwind?
                </p>
                <p>
                    <a
                        href="https://tailwindcss.com/docs"
                        className="ui-text-sky-500 ui-hover:text-sky-600"
                    >
                        Read the docs &rarr;
                    </a>
                </p>
            </div>
        </div>
    )
}
