import { getAllDonations } from "../../lib/db";



export default async (req, res) => {
    try {
        const {donations} = await getAllDonations()
        res.status(200).json({donations})
    } catch (error) {
        res.status(500).json({error})
    }
}