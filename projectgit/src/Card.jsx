export default function Card(){
    return(
        <>
        {/* <div className="flex flex-wrap flex-row justify-center gap-2 "> */}
        <div className="grid grid-cols-3 sm:bg-blue-400 ">
        <div className="w-[150px] bg-pink-200 h-[150px] rounded-lg shawdow-md p-4 m-2 overflow-scroll">
            <h4 className="font-extrabold">blog 1</h4>
            <p>this is first blog</p>
            <article>this is website belogs to reactthis is website belogs to reactthis is website belogs to reactthis is website belogs to reactthis is website belogs to reactthis is website belogs to reactthis is website belogs to react
                this is website belogs to reactthis is website belogs to reactthis is website belogs to reactthis is website belogs to reactthis is website belogs to reactthis is website belogs to reactthis is website belogs to react
            </article>
            <button className="btn btn-red hover:text-blue-200">see more...</button>
        </div>
        <div className="w-[150px] bg-green-200 h-[150px] rounded-lg shawdow-md p-4 m-2">
            <h4 className="font-extrabold">blog 2</h4>
            <p>this is first blog</p>
            <article>this is website belogs to react</article>
            <button className="btn btn-red">see more...</button>
        </div>
        <div className="w-[150px] bg-blue-200 h-[150px] rounded-lg shawdow-md p-4 m-2">
            <h4 className="font-extrabold">blog 3</h4>
            <p>this is first blog</p>
            <article>this is website belogs to react</article>
            <button className="btn btn-red">see more...</button>
        </div>
        <div className="w-[150px] bg-yellow-200 h-[150px] rounded-lg shawdow-md p-4 m-2">
            <h4 className="font-extrabold">blog 4</h4>
            <p>this is first blog</p>
            <article>this is website belogs to react</article>
            <button className="btn btn-red">see more...</button>
        </div>
        <div className="w-[150px] bg-purple-200 h-[150px] rounded-lg shawdow-md p-4 m-2">
            <h4 className="font-extrabold">blog 5</h4>
            <p>this is first blog</p>
            <article>this is website belogs to react</article>
            <button className="btn btn-red">see more...</button>
        </div>
        </div>
        </>
    )
}