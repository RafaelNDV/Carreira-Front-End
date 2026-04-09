import { Aside } from "./components/Aside"
import Card from "./components/Card"
import { Container } from "./components/Container"
import { Main } from "./components/Main"
import { SeacrhInput } from "./components/SearchInput"
import { Typography } from "./components/Typography"
import { DailyBudget } from "./components/DailyBudgt"
import { Savings } from "./components/Savings"
import { Moviments } from "./components/Moviments"
import { Accounts } from "./components/Accounts"

function App() {
  return (
    <div className="bg-neutral-background min-h-screen">
      <Container>
        <Aside/>
        <Main>
          <SeacrhInput name='q'/>
          <div>
            <Typography variant="h1">
              Olá Vinny!
            </Typography>
            <Typography>
              Veja como estão suas finanças hoje.
            </Typography>
          </div>
          <section className="grid grid-cols-2 items-stretch gap-6">
            <Card>
              <Card.Header>
                Orçamento diário disponível:
              </Card.Header>
              <Card.Body>
                <DailyBudget value={200}/>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Progresso da meta financeira
              </Card.Header>
              <Card.Body>
                <Savings/>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Movimentação financeira
              </Card.Header>
              <Card.Body>
                <Moviments/>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Minhas contas
              </Card.Header>
              <Card.Body>
                <Accounts/>
              </Card.Body>
            </Card>
          </section>
        </Main>
      </Container>
    </div>
  )
}

export default App
