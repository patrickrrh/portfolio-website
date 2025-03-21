export const SkeletonOne = () => {
  return (
    <div className="relative flex gap-10 h-full">
      <div className="w-full mx-auto bg-transparent dark:bg-transparent h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
          <img
            src="/images/project-readracoon.png"
            alt="todo-list image"
            className="h-auto w-full aspect-[16/9] object-cover object-center rounded-sm mt-4"
          />
        </div>
      </div>
    </div>
  );
};
