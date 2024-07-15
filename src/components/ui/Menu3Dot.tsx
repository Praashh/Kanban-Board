import { Button } from "./Button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./Dialog"
import { Input } from "./Input"

const Menu3Dot = () => {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <button><svg width="24" height="6" viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6ZM12 6C13.6569 6 15 4.65685 15 3C15 1.34315 13.6569 0 12 0C10.3431 0 9 1.34315 9 3C9 4.65685 10.3431 6 12 6ZM24 3C24 4.65685 22.6569 6 21 6C19.3431 6 18 4.65685 18 3C18 1.34315 19.3431 0 21 0C22.6569 0 24 1.34315 24 3Z" fill="#CDCCCA" />
                    </svg></button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>List Actions</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="title" className="text-right">
                                new title
                            </label>
                            <Input
                                required
                                id="title"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="description" className="text-right">
                                new desc
                            </label>
                            <Input
                                required
                                id="description"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="attachment" className="text-right">
                                attachment
                            </label>
                            <Input
                                required
                                id="attachment"
                                type="file"
                                className="col-span-3 ml-2"
                            />
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4">
                            <label htmlFor="favcolor">change list color</label>
                            <Input type="color" id="favcolor" name="favcolor" value="#ff0000" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={()=>{confirm("Cross check your details...")}} type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>


        </>
    )
}

export default Menu3Dot
