import { useEffect } from "react"
import { Button } from "./button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"
import { Input } from "./input"


export function InputCard() {
  useEffect(()=>{
    console.log("InputCard Rendering")
  })
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="select-none md:text-2xl border border-dashed border-spacing-10 border-gray-400 h-80 rounded-lg flex justify-center items-center">
          + Add new card
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new card</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="title" className="text-right">
              title
            </label>
            <Input
              id="title"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="description" className="text-right">
              description
            </label>
            <Input
              id="description"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="attachment" className="text-right">
              attachment
            </label>
            <Input
              id="attachment"
              type="file"
              className="col-span-3 ml-2"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
