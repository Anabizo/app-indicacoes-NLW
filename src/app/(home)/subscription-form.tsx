import { Button } from '@/components/button'
import { IconInput, Input, InputRoot } from '@/components/input'
import { ArrowRight, Mail, User } from 'lucide-react'

export function SubscriptionForm() {
  return (
    <form className="w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px]">
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <InputRoot>
          <IconInput>
            <User />
          </IconInput>
          <Input type="text" placeholder="Nome completo" />
        </InputRoot>

        <InputRoot>
          <IconInput>
            <Mail />
          </IconInput>
          <Input type="text" placeholder="E-mail" />
        </InputRoot>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight className="size-6" />
      </Button>
    </form>
  )
}
