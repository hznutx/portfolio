import { Snippet } from "@heroui/react";

export const SnipText = ({ code }: { code: string }) => {
    return (
        <Snippet hideSymbol variant="bordered" size="sm" classNames={{ base: 'p-0 pl-2 m-0  w-[100%]',content:'' }} >
            <span>{code}</span>
        </Snippet>
    );
}
