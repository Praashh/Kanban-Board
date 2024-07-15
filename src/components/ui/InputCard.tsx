import { useEffect } from "react"
import InputDialog from "./InputDialog"


export function InputCard() {
  useEffect(() => {
    console.log("InputCard Rendering")
  })
  return (
    <InputDialog inputDialog={<div className="select-none md:text-2xl border border-dashed border-spacing-10 border-gray-400 h-80 rounded-lg flex justify-center items-center">
      + Add new card
    </div>} />
  )
}
