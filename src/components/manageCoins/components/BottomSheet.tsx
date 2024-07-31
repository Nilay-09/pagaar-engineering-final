import React from 'react';

interface BottomSheetProps {
  children: React.ReactNode;
}

export default function BottomSheet({ children }: BottomSheetProps) {
  return (
    <div className="bottom-sheet py-6 border border-[#000] h-full">
      {children}
    </div>
  );
}
