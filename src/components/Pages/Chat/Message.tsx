import { Spinner } from "@inkjs/ui"
import { Box, Text } from "ink"

export function Message({content = "", role = "assistant", typing = false}) {
    return (
        <Box borderColor={role == "assistant" ? "blue" : "yellow"} borderStyle={"round"} paddingLeft={1}>
            {typing ? <Spinner type="circle" label="Typing..."/> : <Text wrap="wrap">{content}</Text>}
        </Box>
    )
}