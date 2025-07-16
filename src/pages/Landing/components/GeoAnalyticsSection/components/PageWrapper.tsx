export const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      position: "relative",
      height: "100%",
      width: "100%",
      backgroundColor: "#fff",
    }}
  >
    {children}
  </div>
);
