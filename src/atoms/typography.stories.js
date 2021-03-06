import React from "react";

export default {
  title: "Design System/Atoms/typography",
};


export const fontFamily = () => {
    return (
      <div className="p-8 text-grey-dark font-sans">
        <div>
          <div className="text-sm">.font-sans</div>
          <div className="mt-1 text-black text-xl font-sans">This is dummy text</div>
        </div>
        <div className="mt-6">
          <div className="text-sm">.font-serif</div>
          <div className="mt-1 text-black text-xl font-serif">This is dummy text</div>
        </div>
        <div className="mt-6">
          <div className="text-sm">.font-mono</div>
          <div className="mt-1 text-black text-xl font-mono">This is dummy text</div>
        </div>
      </div>
    );
  };

export const fontSizes = () => {
  return (
    <div className="p-8 text-grey-dark font-sans">
      <div>
        <div className="text-sm">.text-xs (12px)</div>
        <div className="mt-1 text-black text-xs">This is dummy text</div>
      </div>
      <div className="mt-6">
        <div className="text-sm">.text-sm (14px)</div>
        <div className="mt-1 text-black text-sm">This is dummy text</div>
      </div>
      <div className="mt-6">
        <div className="text-sm">.text-base (16px)</div>
        <div className="mt-1 text-black text-base">This is dummy text</div>
      </div>
      <div className="mt-6">
        <div className="text-sm">.text-lg (18px)</div>
        <div className="mt-1 text-black text-lg">This is dummy text</div>
      </div>
      <div className="mt-6">
        <div className="text-sm">.text-xl (20px)</div>
        <div className="mt-1 text-black text-xl">This is dummy text</div>
      </div>
      <div className="mt-6">
        <div className="text-sm">.text-2xl (24px)</div>
        <div className="mt-1 text-black text-2xl">This is dummy text</div>
      </div>
      <div className="mt-6">
        <div className="text-sm">.text-3xl (30px)</div>
        <div className="mt-1 text-black text-3xl">This is dummy text</div>
      </div>
      <div className="mt-6">
        <div className="text-sm">.text-4xl (36px)</div>
        <div className="mt-1 text-black text-4xl">This is dummy text</div>
      </div>
      <div className="mt-6">
        <div className="text-sm">.text-5xl (48px)</div>
        <div className="mt-1 text-black text-5xl">This is dummy text</div>
      </div>
      <div className="mt-6">
        <div className="text-sm">.text-6xl (64px)</div>
        <div className="mt-1 text-black text-6xl">This is dummy text</div>
      </div>
    </div>
  );
};

export const fontWeights = () => {
  return (
    <div className="p-8 text-grey-dark font-sans">
      <div>
        <div className="text-sm">.font-thin (200)</div>
        <div className="mt-1 text-xl font-thin">This is dummy text</div>
      </div>
      <div className="mt-6">
        <div className="text-sm">.font-light (300)</div>
        <div className="mt-1 text-xl font-light">This is dummy text</div>
      </div>
      <div className="mt-6">
        <div className="text-sm">.font-normal (400)</div>
        <div className="mt-1 text-xl font-normal">This is dummy text</div>
      </div>
      <div className="mt-6">
        <div className="text-sm">.font-medium (500)</div>
        <div className="mt-1 text-xl font-medium">This is dummy text</div>
      </div>
      <div className="mt-6">
        <div className="text-sm">.font-semibold (600)</div>
        <div className="mt-1 text-xl font-semibold">This is dummy text</div>
      </div>
      <div className="mt-6">
        <div className="text-sm">.font-bold (700)</div>
        <div className="mt-1 text-xl font-bold">This is dummy text</div>
      </div>
      <div className="mt-6">
        <div className="text-sm">.font-extrabold (800)</div>
        <div className="mt-1 text-xl font-extrabold">This is dummy text</div>
      </div>
      <div className="mt-6">
        <div className="text-sm">.font-black (900)</div>
        <div className="mt-1 text-xl font-black">This is dummy text</div>
      </div>
    </div>
  );
};

export const letterSpacing = () => {
    return (
      <div className="p-8 text-grey-dark font-sans">
        <div>
          <div className="text-sm">.tracking-tighter (-0.05em)</div>
          <div className="mt-1 text-xl tracking-tighter">This is dummy text</div>
        </div>
        <div className="mt-6">
          <div className="text-sm">.tracking-tight (-0.025em)</div>
          <div className="mt-1 text-xl tracking-tight">This is dummy text</div>
        </div>
        <div className="mt-6">
          <div className="text-sm">.tracking-normal (0)</div>
          <div className="mt-1 text-xl tracking-normal">This is dummy text</div>
        </div>
        <div className="mt-6">
          <div className="text-sm">.tracking-wide (0.025em)</div>
          <div className="mt-1 text-xl tracking-wide">This is dummy text</div>
        </div>
        <div className="mt-6">
          <div className="text-sm">.tracking-wider (0.05em)</div>
          <div className="mt-1 text-xl tracking-wider">This is dummy text</div>
        </div>
        <div className="mt-6">
          <div className="text-sm">.tracking-widest (0.1em)</div>
          <div className="mt-1 text-xl tracking-widest">This is dummy text</div>
        </div>
      </div>
    );
  };
