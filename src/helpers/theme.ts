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

export const genBgColorLighter = (color: string) => {
    switch (color) {
        case "green-500":
            return "bg-green-200";
        case "red-500":
            return "bg-red-200";
        case "blue-500":
            return "bg-blue-200";
        default:
            break;
    }
}

export const genTextColor = (color: string) => {
    switch (color) {
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

export const genTextColorHover = (color: string) => {
    switch (color) {
        case "green-500":
            return "hover:text-green-500";
        case "red-500":
            return "hover:text-red-500";
        case "blue-500":
            return "hover:text-blue-500";
        default:
            break;
    }
}

export const genTextColorLighter = (color: string) => {
    switch (color) {
        case "green-500":
            return "text-green-200";
        case "red-500":
            return "text-red-200";
        case "blue-500":
            return "text-blue-200";
        default:
            break;
    }
}

export const genBorderColor = (color: string) => {
    switch (color) {
        case "green-500":
            return "border-green-500";
        case "red-500":
            return "border-red-500";
        case "blue-500":
            return "border-blue-500";
        default:
            break;
    }
}