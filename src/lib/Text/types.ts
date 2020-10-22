export interface TextProps {
    text: string,
    small?: boolean,
    bold?: boolean,
    italic?: boolean,
    align?: Alignment | string,
}

export type Alignment = 'left' | 'center' | 'right' | 'justify';