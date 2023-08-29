export const genBgColor = (color: string) => {
    switch (color) {
        case "green-500":
            return "bg-green-500";
        case "red-500":
            return "bg-red-500";
        case "blue-500":
            return "bg-blue-500";
        default:
            break;
    }
}

export const genTextColor = (theme: string) => {
    switch (theme) {
        case "green-500":
            return "text-green-500";
        case "red-500":
            return "text-red-500";
        case "blue-500":
            return "text-blue-500";
        default:
            break;
    }
}