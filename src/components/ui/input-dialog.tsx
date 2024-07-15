import { Button } from "./button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"
import { Input } from "./input"

type DialogProps = {
  inputDialog:any;    
}

const InputDialog = ({inputDialog}:DialogProps) => {
  return (
    <Dialog>
        <DialogTrigger asChild>
          {inputDialog}
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

export default InputDialog