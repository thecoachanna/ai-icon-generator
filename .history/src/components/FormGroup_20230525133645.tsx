export function FormGroup(props: React.ComponentPropsWithoutRef<"div">) {
    return <div {...props}
        {props.children}
        className="flex flex-col gap-2"
    ></div>;
}