export const LogoIcon = ({ clickHandler }) => {
    return (
        <svg
            stroke="white"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            id="icon-in-div"
            height="4rem"
            width="4rem"
            xmlns="http://www.w3.org/2000/svg"
            cursor="pointer"
            onClick={clickHandler || (() => { })}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path><path d="M9 8v8"></path><path d="M15 8v8"></path><path d="M9 12h6"></path>
        </svg>
    )
}
