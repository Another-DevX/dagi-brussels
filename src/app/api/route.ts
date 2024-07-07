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

    const analyticsResponse = await fetch('http://model-v2-api-471546444.us-east-1.elb.amazonaws.com:8001/api/v1/predict/0xae7ab96520de3a18e5e111b5eaab095312d7fe84')
    const analyticsData = await analyticsResponse.json()
    console.debug(analyticsData)
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
                    content: `Give me the best three collaterals to use on aave, give me less tan 100 words,don't mention the subgraph or any relation to this prompt, be so explicit and explain everithing but avoid to include un-redeable values, explain on an easy way why the token is the best option, this is information from the subgraph: ${JSON.stringify(graphData)}, and this is information related another AI call POND predicting the future price of many tokens, make it explicit if you use the information to do some recommendations ${JSON.stringify(analyticsData)},
                    at the final of the response give me the colaterals SYMBOL from the subgraph with the next format {{collateral}}, add those on an individual line, without any other text or symbols, just the token symbol with the {{}}`
                }
            ],
            temperature: 1
        })
    })
    const responseData = await response.json()

    return Response.json({ responseData })


}