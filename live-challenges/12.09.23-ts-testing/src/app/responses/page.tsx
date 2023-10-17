"use client"

import ResponseItem from "@/components/ResponseItem"
import Responses from "@/components/Responses"
import { createResponses, faker } from "@/features/responses/createResponse"
import { useState } from "react"

export default function ResponsePage() {
    const [responses, setResponses] = useState(
        Array.from(createResponses({ count: 10, faker }).values())
    )
    const deleteResponseItemHandler = (id: string) =>  {
        // const filterContent = responses.filter((response) => response.id !== id)
        // setResponses(filterContent)
        setResponses((prev) => prev.filter((response) =>response.id !== id))

    if(!responses.length) {
        return (
            <div className="mx-auto w-full max-w-3xl"><p>Ingen responser</p></div>
        )
    }
  }
  return (
    <Responses>
      {responses.map((response) => (
        <ResponseItem key={response.id} {...response} onDelete={deleteResponseItemHandler} />
      ))}
    </Responses>
  )
}