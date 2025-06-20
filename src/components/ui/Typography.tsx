import './Typography.css';

export function TypographyH1(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h1 {...props} className={`sondera-quicklogin typography h1 ${props.className ?? ''}`}>
      {props.children}
    </h1>
  );
}

export function TypographyH2(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h2 {...props} className={`sondera-quicklogin typography h2 ${props.className ?? ''}`}>
      {props.children}
    </h2>
  );
}

export function TypographyH3(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h3 {...props} className={`sondera-quicklogin typography h3 ${props.className ?? ''}`}>
      {props.children}
    </h3>
  );
}

export function TypographyH4(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h4 {...props} className={`sondera-quicklogin typography h4 ${props.className ?? ''}`}>
      {props.children}
    </h4>
  );
}

export function TypographyH5(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h5 {...props} className={`sondera-quicklogin typography h5 ${props.className ?? ''}`}>
      {props.children}
    </h5>
  );
}

export function TypographyP(props: React.HTMLProps<HTMLParagraphElement>) {
  return (
    <p {...props} className={`sondera-quicklogin typography p ${props.className ?? ''}`}>
      {props.children}
    </p>
  );
}
