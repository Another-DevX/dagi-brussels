export async function POST(request: Request) {
    const graphResponse = await fetch('https://gateway-arbitrum.network.thegraph.com/api/369a7404bc39d66970805282c50365af/subgraphs/id/8wR23o1zkS4gpLqLNU4kG3JHYVucqGyopL5utGxP2q1N', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `
            {
              reserves {
                name
                symbol
                liquidityRate
                variableBorrowRate
                stableBorrowRate
                usageAsCollateralEnabled
                baseLTVasCollateral
                reserveLiquidationThreshold
                totalDeposits
                totalLiquidity
              }
            }
          `
        })
      })
      const graphData = await graphResponse.json()
      console.debug(graphData)

    const response = await fetch('https://api.red-pill.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer sk-qVBlJkO3e99t81623PsB0zHookSQJxU360gDMooLenN01gv2"
        },
        body: JSON.stringify({
            model: 'gpt-4o',
            messages: [
                {
                    role: 'user',
                    content: `Give me the best three collaterals to use on aave, give me less tan 100 words,don't mention the subgraph or any relation to this prompt, be so explicit and explain everithing but avoid to include un-redeable values, explain on an easy way why the token is the best option, this is information from the subgraph: ${JSON.stringify(graphData)},
                    at the final of the response give me the colaterals SYMBOL from the subgraph with the next format {{collateral}}`
                }
            ],
            temperature: 1
        })
    })
    const responseData = await response.json()

    return Response.json({responseData})

 
}