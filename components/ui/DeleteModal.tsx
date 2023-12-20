'use client'
import { Copy } from "lucide-react"
 import { useAppStore } from "@/store/store"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { db, storage } from "@/firebase"
import { deleteObject, ref } from "firebase/storage"
import { useUser } from "@clerk/nextjs"
import { deleteDoc, doc } from "firebase/firestore"
 
export function DeleteModal() {
    const {user} = useUser()
    const [isDeleteModalOpen, setIsDeleteModalOpen, fileId, setFileId] =
    useAppStore((state) => [
        state.isDeleteModalOpen,
        state.setIsDeleteModalOpen,
        state.fileId,
        state.setFileId,
    ])

    async function deleteFile() {
        if (!user || !fileId) return;
    
        const fileRef = ref(storage, `users/${user.id}/files/${fileId}`);
    
        try {
            await deleteObject(fileRef);
            await deleteDoc(doc(db, "users", user.id, "files", fileId));
            console.log(`File ${fileId} deleted successfully`);
        } catch (error) {
            console.error("Error deleting file:", error);
            // Handle the error appropriately here
        }
        setIsDeleteModalOpen(false);
    }
  return (
    <Dialog
    open={isDeleteModalOpen}
    onOpenChange={(isOpen) => {

    }}
    >
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete?</DialogTitle>
          <DialogDescription>
           This will permanently delete your file!
          </DialogDescription>
        </DialogHeader>

        <div className="flex space-x-2 py-3">
            <Button
            size="sm"
            className="px-3 flex-1"
            variant={"ghost"}
            onClick={() => setIsDeleteModalOpen(false)}
            >
                <span className="sr-only">Cancel</span>
                <span>Cancel</span>
            </Button>

            <Button 
            type="submit"
            size="sm"
            className="px-3 flex-1"
            onClick={() => deleteFile()}
            >
                <span className="sr-only"> Delete</span>
                <span>Delete</span>
            </Button>
        </div>

        
        
      </DialogContent>
    </Dialog>
  )
}