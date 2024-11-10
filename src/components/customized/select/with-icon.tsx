"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AppleIcon,
  BananaIcon,
  CherryIcon,
  CitrusIcon,
  GrapeIcon,
} from "lucide-react";

const fruits = [
  { value: "apple", label: "Apple", icon: <AppleIcon /> },
  { value: "banana", label: "Banana", icon: <BananaIcon /> },
  { value: "cherry", label: "Cherry", icon: <CherryIcon /> },
  { value: "grapes", label: "Grapes", icon: <GrapeIcon /> },
  { value: "citrus", label: "Citrus", icon: <CitrusIcon /> },
];

export default function SelectWithIconDemo() {
  const [value, setValue] = React.useState("apple");
  const fruit = fruits.find((fruit) => fruit.value === value);

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-[180px]">
        <div className="flex items-center gap-2 [&_svg]:h-4 [&_svg]:w-4">
          {fruit?.icon}
          <SelectValue placeholder="Select a fruit" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {fruits.map((fruit) => (
            <SelectItem key={fruit.value} value={fruit.value}>
              {fruit.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
