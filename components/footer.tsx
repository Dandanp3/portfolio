export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Todos os direitos reservados{" "}
          <span className="text-primary font-semibold">Dandanp3</span>
        </p>
      </div>
    </footer>
  )
}
