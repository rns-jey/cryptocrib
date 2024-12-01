import { cn } from "@/lib/utils";
import { Cog6ToothIcon, HomeIcon } from "@heroicons/react/24/outline";
import React from "react";

const navigation = [{ name: "Dashboard", href: "#", icon: HomeIcon, current: true }];

export default function NavigationMenu() {
  return (
    <>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={cn(
                      item.current ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white",
                      "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                    )}
                  >
                    <item.icon aria-hidden="true" className="size-6 shrink-0" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="mt-auto">
            <a
              href="#"
              className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <Cog6ToothIcon aria-hidden="true" className="size-6 shrink-0" />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
