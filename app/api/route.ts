import { DevBundlerService } from 'next/dist/server/lib/dev-bundler-service'
import { cache } from 'react'

export const getItem = cache(async (id: string) => {

    const item = await db.item.findUnique({ id })
    return item
})