import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useAppStore } from "@/store/store";
import { Input } from "./input";
import { db } from "@/firebase"; // Assuming you are using Firebase
import { doc, updateDoc } from "firebase/firestore"; // For Firebase Firestore
import { DialogHeader, DialogTitle,Dialog, DialogContent } from "./dialog";

function RenameModal() {
    const { user } = useUser();
    const [newFilename, setNewFilename] = useState("");

    const [isRenameModalOpen, setIsRenameModalOpen, fileId, filename] =
        useAppStore((state) => [
            state.isRenameModalOpen,
            state.setIsRenameModalOpen,
            state.fileId,
            state.filename
        ]);

    const renameFile = async () => {
        if (!user || !fileId) return;

        // Update the filename in Firestore (or your database)
        const fileRef = doc(db, "users", user.id, "files", fileId);
        await updateDoc(fileRef, { name: newFilename });

        setIsRenameModalOpen(false);
    };

    return (
        <Dialog
            open={isRenameModalOpen}
            onOpenChange={setIsRenameModalOpen}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="pb-2">Rename the File</DialogTitle>
                    <Input
                        id="newFilename"
                        defaultValue={filename}
                        onChange={(e) => setNewFilename(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                renameFile();
                            }
                        }}
                    />
                </DialogHeader>
            </DialogContent>
            <div className="flex justify-end p-4 space-x-2">
                <button className="btn btn-secondary" onClick={() => setIsRenameModalOpen(false)}>Cancel</button>
                <button className="btn btn-primary" onClick={renameFile}>Rename</button>
            </div>
        </Dialog>
    );
}

export default RenameModal;