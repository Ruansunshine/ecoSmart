"use client"

import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useState } from "react"
import { cn } from "@/lib/utils"

const rooms = [
  { value: "sala", label: "Sala de Estar" },
  { value: "quarto", label: "Quarto Principal" },
  { value: "cozinha", label: "Cozinha" },
  { value: "escritorio", label: "Escritório" },
  { value: "banheiro", label: "Banheiro" },
]

export function RoomSelector() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("sala")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between md:w-[200px]">
          {value ? rooms.find((room) => room.value === value)?.label : "Selecione um ambiente"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 md:w-[200px]">
        <Command>
          <CommandInput placeholder="Buscar ambiente..." />
          <CommandList>
            <CommandEmpty>Nenhum ambiente encontrado.</CommandEmpty>
            <CommandGroup>
              {rooms.map((room) => (
                <CommandItem
                  key={room.value}
                  value={room.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === room.value ? "opacity-100" : "opacity-0")} />
                  {room.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
