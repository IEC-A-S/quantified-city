export const ContentWrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      position: "absolute",
      left: "10vh",
      top: "15vh",
      zIndex: 1,
    }}
  >
    {children}
  </div>
);
